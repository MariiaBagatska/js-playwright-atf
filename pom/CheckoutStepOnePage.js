const PageHeader = require('../pom/PageHeader');

export class CheckoutStepOnePage extends PageHeader {
    constructor(page) {
        super(page);
        this.page = page;
        this.#checkoutInfo = this.page.locator('[data-test="checkout-info-container]"');
        this.#firstName = this.page.locator('[data-test="firstName"]');
        this.#lastName = this.page.locator('[data-test="lastName"]');
        this.#postalCode = this.page.locator('[data-test="postalCode"]');
        this.#continueCheckoutBtn = this.page.locator('[data-test="continue"]');
        this.#cancelCheckoutBtn = this.page.locator('[data-test="cancel"]');
    }

    #checkoutInfo;
    #firstName;
    #lastName;
    #postalCode;
    #continueCheckoutBtn;
    #cancelCheckoutBtn

    async checkoutInfoIsVisible() {
        console.log('Verifying checkout info is visible');
        return await this.#checkoutInfo.isVisible();
    }

    async enterFirstName(firstName) {
        console.log('Entering first name');
        return await this.#firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        console.log('Entering last name');
        return await this.#lastName.fill(lastName);
    }

    async enterPostalCode(postalCode) {
        console.log('Entering postal code');
        return await this.#postalCode.fill(postalCode);
    }

    async clickContinueCheckout() {
        console.log('Clicking continue checkout');
        return await this.#continueCheckoutBtn.click();
    }

    async clickCancelCheckout() {
        console.log('Clicking cancel checkout');
        return await this.#cancelCheckoutBtn.click();
    }


}

module.exports = CheckoutStepOnePage;