import { PageHeader } from "./PageHeader";

export class CartPage extends PageHeader {
    constructor(page) {
        super(page);
        this.page = page;
        this.#item = this.page.locator('[data-test="inventory-item"]').first();
        this.#itemName = this.page.locator('[data-test="inventory-item-name"]').first();
        this.#itemPrice = this.page.locator('[data-test="inventory-item-price"]').first();
        this.#removeBtn = this.page.locator('.btn_secondary').first(); // because other locators are dynamic
        this.#checkoutBtn = this.page.locator('[data-test="checkout"]');
        this.#continueShoppingBtn = this.page.locator('[data-test="continue-shopping"]');
    }

    #item;
    #itemName;
    #itemPrice;
    #removeBtn;
    #checkoutBtn;
    #continueShoppingBtn;

    async itemIsVisible() {
        const isVisible = await this.#item.isVisible();
        console.log(`Checking item is visible on the cart page: ${isVisible}`);
        return isVisible;
    }

    async getItemName() {
        const itemName = await this.#itemName.textContent();
        console.log(`Getting item name on the cart page: ${itemName}`);
        return itemName;
    }

    async getItemPrice() {
        const itemPrice = await this.#itemPrice.textContent();
        console.log(`Getting item price on the cart page: ${itemPrice}`);
        return itemPrice;
    }

    async removeItemFromCart() {
        console.log('Removing item from the cart on the cart page');
        return await this.#removeBtn.click();
    }

    async clickCheckout() {
        console.log('Checking out');
        return await this.#checkoutBtn.click();
    }
    async clickContinueShopping() {
        console.log('Returnig to the inventory page from the cart page');
        return await this.#continueShoppingBtn.click();
    }
}
