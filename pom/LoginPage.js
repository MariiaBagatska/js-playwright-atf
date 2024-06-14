export class LoginPage {
    constructor(page) {
        this.page = page;
        this.#usernameInput = this.page.locator('[data-test="username"]');
        this.#passwordInput = this.page.locator('[data-test="password"]');
        this.#loginBtn = this.page.locator('[data-test="login-button"]');
        this.#errorMessageLocator = this.page.locator('[data-test="error"]');
    }

    #usernameInput;
    #passwordInput;
    #loginBtn;
    #errorMessageLocator;

    async enterUsername(username) {
        console.log(`Entering username: ${username}`);
        return await this.#usernameInput.fill(username);
    }

    async enterPassword(password) {
        console.log('Entering password');
        return await this.#passwordInput.fill(password);
    }

    async clickLoginBtn() {
        console.log('Clicking login button');
        return await this.#loginBtn.click();
    }

    async getErrorMessage() {
        console.log(`Checking for the presence of error message on the login page`);
        const errorIsVisible = await this.#errorMessageLocator.isVisible();
        if (errorIsVisible) {
            return await this.#errorMessageLocator.textContent();
        } else {
            return null;
        }

    }
}

module.exports = LoginPage;