const { test: setup } = require(`@playwright/test`);
const LoginPage = require(`../pom/LoginPage.js`);
const authFile = './context/user.json';

setup('Authentification', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.userLogsIn(process.env.username, process.env.password);

    await page.waitForURL(process.env.expectedUrl);
    // Save authentification state in the test context - meaning user is logged in
    console.log('Saving authentification in the test context');
    await page.context().storageState({ path: authFile });
});