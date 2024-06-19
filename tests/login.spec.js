const testUsers = require('../test-data/test-users.json'); // works without error

//import { testUsers } from '../test-data/test-users.json'; //brings undefined error as probably is accesed asynchrone
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/LoginPage';

const validUsers = testUsers.validUsers;
const invalidUsers = testUsers.invalidUsers;

test.beforeEach(async ({ page }) => {
    console.log(`Starting ${test.info().title}`);
    console.log('Opening login page');
    await page.goto('/');
});

test.afterEach(async ({ page }) => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);

    if (test.info().status != test.info().expectedStatus) {
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    }
});

for (let i = 0; i < validUsers.length; i++) {
    test(`Successful login for ${validUsers[i].username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(validUsers[i].username);
        await loginPage.enterPassword(validUsers[i].password);
        await loginPage.clickLoginBtn();
        await expect(page).toHaveURL(validUsers[i].expectedUrl);
    });
}

for (let i = 0; i < invalidUsers.length; i++) {
    test(`Login failed attempt due to ${invalidUsers[i].scenario}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(invalidUsers[i].username);
        await loginPage.enterPassword(invalidUsers[i].password);
        await loginPage.clickLoginBtn();
        let expectedErrorText = invalidUsers[i].error;
        let actualErrorText = await loginPage.getErrorMessage();
        expect(actualErrorText).toBe(expectedErrorText);
        await expect(page).toHaveURL(invalidUsers[i].expectedUrl);
    });
}

test.fail('Brute-force attack prevention', async ({ page }) => { // This test is expected to fail
    for (let i = 0; i < 5; i++) {
        console.log(`Login attempt # ${i}`);
        let validUsername = 'standard-user';
        let invalidPassword = 'secret-saucee'
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(validUsername);
        await loginPage.enterPassword(invalidPassword);
        await loginPage.clickLoginBtn();
    }
    await expect(page).toHaveURL(/locked/);
});

test('Session management after inactivity', {
    tag: '@slow',
}, async ({ page }) => {
    test.setTimeout(720000);
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.clickLoginBtn();
    await expect(page).toHaveURL('/inventory.html');
    console.log('Simulating inactivity for 11 minutes');
    await page.waitForTimeout(660000);
    await page.goto(validUsers[0].expectedUrl);
    await expect(page).toHaveURL('/');
});
