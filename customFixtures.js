/*
// I have two approaches for handling authentication in my Playwright tests:
// 1. Separate Test Functions: Use the `auth` custom fixture for tests that require authorization and the default Playwright `test` function for tests that don't.
// 2. Project Dependencies: Create a "setup" project that manages authentication logic and dependencies. All other projects, including tests that don't need authorization, would depend on this setup project.
// Both approaches are valid, so the best choice depends on your project's size and complexity.
// Additional Considerations:
// - Smaller Projects:Separate test functions might be simpler.
// - Larger Projects:Project dependencies promote organization and scalability.
*/

const { expect, test: auth } = require(`@playwright/test`);
const LoginPage = require(`./pom/LoginPage.js`);
const authFile = './context/user.json';

const customFixtures = {
  auth: async ({ page }, use) => {
    console.log('Running custom fixture "auth"');
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.clickLoginBtn();
    await page.goto('/inventory.html');

    // Save authentication state in the test context - meaning user is logged in
    console.log('Saving authentication in the test context');
    await page.context().storageState({ path: authFile });
    await use(page);
  },
};

const test = auth.extend(customFixtures);
module.exports = { expect, test };