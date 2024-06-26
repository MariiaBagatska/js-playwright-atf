import { test as setup } from '@playwright/test';
import { LoginPage } from '../pom/LoginPage.js';

const authFile = './context/user.json';

setup('Authentification', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.clickLoginBtn();
    await page.goto('/inventory.html');

    // Save authentification state in the test context - meaning user is logged in
    console.log('Saving authentification in the test context');
    await page.context().storageState({ path: authFile });
});
