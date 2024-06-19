import { PageHeader } from "./PageHeader";

export class CheckoutStepTwoPage extends PageHeader {
    constructor(page) {
        super(page);
        this.page = page;
        this.#cartList = this.page.locator('[data-test="cart-list]"');
        this.#paymentInfo = this.page.locator('[data-test="payment-info-value"]');
        this.#shippingInfo = this.page.locator('[data-test="shipping-info-value"]');
        this.#subtotalPrice = this.page.locator('[data-test="subtotal-label"]');
        this.#tax = this.page.locator('[data-test="tax-label"]');
        this.#totalAmount = this.page.locator('[data-test]="total-label"');
        this.#finishCheckoutBtn = this.page.locator('[data-test="finish"]');
        this.#cancelCheckoutBtn = this.page.locator('[data-test="cancel"]');
    }

    #cartList;
    #paymentInfo;
    #shippingInfo;
    #subtotalPrice;
    #tax;
    #totalAmount;
    #finishCheckoutBtn;
    #cancelCheckoutBtn;

    async cartListIsVisible() {
        console.log('Verifying cart list is visible');
        return await this.#cartList.isVisible();
    }

    async paymentInfoIsVisible() {
        console.log('Verifying payment information is visible');
        return await this.#paymentInfo.isVisible();
    }

    async shippingInfoIsVisible() {
        console.log('Verifying shipping information is visible');
        return await this.#shippingInfo.isVisible();
    }

    async subtotalPriceIsVisible() {
        console.log('Verifying item price is visible');
        return await this.#subtotalPrice.isVisible();
    }

    async getSubtotalPrice() {
        const itemPrice = await this.#subtotalPrice.textContent();
        console.log(`Retrieving item price: ${itemPrice}`);
        return itemPrice;
    }

    async taxIsVisible() {
        console.log('Verifying tax amount is visible');
        return await this.#tax.isVisible();
    }

    async getTax() {
        const taxAmount = await this.#tax.textContent();
        console.log(`Retrieving item price: ${taxAmount}`);
        return taxAmount;
    }

    async getPriceTotal() {
        const priceTotal = await this.#totalAmount.textContent();
        console.log(`Retrieving total price: ${this.#totalAmount}`);
        return priceTotal;
    }

    async clickFinishCheckout() {
        console.log('Clicking finish checkout button');
        return await this.#finishCheckoutBtn.click();
    }

    async clickCancelCheckout() {
        console.log('Clicking cancel checkout button');
        return await this.#cancelCheckoutBtn.click();
    }

}
