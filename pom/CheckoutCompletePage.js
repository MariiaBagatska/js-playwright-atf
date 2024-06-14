const PageHeader = require('../pom/PageHeader');

export class CheckoutCompletePage extends PageHeader {
    constructor(page) {
        super(page);
        this.page = page;
        this.#completeLayer = this.page.locator('[data-test="checkout-complete-container"]');
        this.#completeMessage = this.page.locator('[data-test]="complete-header"');
        this.#completeText = this.page.locator('[data-test]="complete-text"');
        this.#backHomeBtn = this.page.locator('[data-test="back-to-products"]');
    }

    #completeLayer;
    #completeMessage;
    #completeText;
    #backHomeBtn;

    async completeLayerIsVisible() {
        console.log('Checking complete screen is visible');
        return await this.#completeLayer.isVisible();
    }

    async completeMessageIsVisible() {
        console.log('Checking complete message is visible');
        return await this.#completeMessage.isVisible();
    }

    async completeTextIsVisible() {
        console.log('Checking complete text is visible');
        return await this.#completeText.isVisible();
    }

    async clickBackHomeBtn() {
        console.log('Returning to the inventory page');
        return await this.#backHomeBtn.click();
    }

}

module.exports = CheckoutCompletePage;