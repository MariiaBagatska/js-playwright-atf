const {test, expect} = require(`@playwright/test`);
const validUsers = require (`../test-data/valid-users.json`);
const invalidUsers = require(`../test-data/invalid-users.json`);
const LoginPage = require(`../pom/LoginPage`);

test.beforeEach(async ({page}) => {
    console.log(`Starting ${test.info().title}`);
    console.log (`Opening login page`);
    await page.goto('./'); 
});

test.afterEach(async ({page}) => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);

    if (test.info().status != test.info().expectedStatus) {
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    }
});

test.describe(`Functional testing`, () => {

    for (let i = 0; i < validUsers.length; i++) {

        test(`Successful login for ${validUsers[i].username}`, async ({page}) => {
            const loginPage = new LoginPage(page);
            await loginPage.userLogsIn(validUsers[i].username, validUsers[i].password);
            await expect(page).toHaveURL(validUsers[i].expectedUrl);

        });
    }
    
    for(let i = 0; i < invalidUsers.length; i++) {

        test(`Login ${invalidUsers[i].scenario}`, async ({page}) => {
            const loginPage = new LoginPage(page);
            await loginPage.userLogsIn(invalidUsers[i].username, invalidUsers[i].password);
            let expcetedErrorText = invalidUsers[i].error;
            let actualErrorText = await loginPage.getErrorMessage();
            expect(actualErrorText).toBe(expcetedErrorText);
            await expect(page).toHaveURL(invalidUsers[i].expectedUrl);
        });
       
    }
});

    test.describe(`Security testing`, ()=> {
        
        test.fail(`Brute-force attack prevention`, async ({page}) => {
            for (let i = 0; i < 5; i++ ){
                console.log(`Login attempt # ${i}`);
                let validUsername = 'standard-user';
                let invalidPassword = 'secret-saucee'
                const loginPage = new LoginPage(page);
                await loginPage.userLogsIn(validUsername, invalidPassword);
            }    
            await expect(page).toHaveURL(/locked/);
        });

        test(`Session management after inactivity`, async ({page}) => {
            test.setTimeout(720000);
            const loginPage = new LoginPage(page);
            await loginPage.userLogsIn(validUsers[0].username, validUsers[0].password);
            await expect(page).toHaveURL(validUsers[0].expectedUrl);
            console.log(`Simulating inactivity for 11 minutes`);
            await page.waitForTimeout(660000);
            await page.goto(validUsers[0].expectedUrl);
            await expect(page).toHaveURL('./');

        });

        

    });
    

