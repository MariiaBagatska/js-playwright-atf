export class LoginPage {
    constructor(page) {
        this.page = page;
        this.#usernameInput = this.page.locator('#user-name');
        this.#passwordInput = this.page.locator('#password');
        this.#loginButton = this.page.locator('#login-button');
        this.#errorMessageLocator = this.page.locator('[data-test="error"]');
    }

    #usernameInput; 
    #passwordInput;
    #loginButton;
    #errorMessageLocator; 

   async userLogsIn(username, password) {
    console.log(`Loging in user ${username}`);
    await this.#usernameInput.fill(username);
    await this.#passwordInput.fill(password);
    await this.#loginButton.click();
   }
   
    async getErrorMessage() {
        console.log(`Checking for the presence of error message on the login page`);
        const errorIsVisible = await this.#errorMessageLocator.isVisible();
        if(errorIsVisible) {
            return await this.#errorMessageLocator.textContent();
        } else {
            return null;
        }
        
    }
}

module.exports = LoginPage;