export class CartPage {
    constructor(page) {
        this.page = page;
        this.#item = this.page.locator('[data-test="inventory-item"]').first();
        this.#itemName = this.page.locator('[data-test="inventory-item-name"]').first();
        this.#itemPrice = this.page.locator('[data-test="inventory-item-price"]').first();
        this.#removeButton = this.page.locator('.btn_secondary').first();
    }

    #item;
    #itemName;
    #itemPrice;
    #removeButton;

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
        return await this.#removeButton.click();
    }
}

module.exports = CartPage;