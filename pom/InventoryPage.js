export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.#item = this.page.locator('[data-test="inventory-item"]').first();
        this.#itemName = this.page.locator('[data-test="inventory-item-name"]').first();
        this.#itemPrice = this.page.locator('[data-test="inventory-item-price"]').first();
        this.#addButton = this.page.locator('.btn_primary').first();
        this.#removeButton = this.page.locator('.btn_secondary').first();
        this.#cartBadge = this.page.locator('.shopping_cart_badge');
    }

    #item;
    #itemName;
    #itemPrice;
    #addButton;
    #removeButton;
    #cartBadge;


    async itemIsVisible() {
        const isVisible = await this.#item.isVisible();
        console.log(`Checking item is visible on inventory page: ${isVisible}`);
        return isVisible;
    }

    async itemCanBeAddedToCart() {
        const itemCanBeAdded = await this.#item.locator(this.#addButton).isVisible();
        console.log(`Checking item can be added to the cart from inventory page: ${itemCanBeAdded}`);
        return itemCanBeAdded;
    }

    async addItemToCart() {
        console.log('Adding item to the cart from inventory page');
        return this.#addButton.click();
    }

    async cartBadgeIsVisible() {
        const cartBadgeIsVisible = await this.#cartBadge.isVisible();
        console.log(`Checking cart badge is visible: ${cartBadgeIsVisible}`);
        return cartBadgeIsVisible;
    }

    async itemCanBeRemovedFromCart() {
        const itemCanBeRemoved = await this.#item.locator(this.#removeButton).isVisible();
        console.log(`Checking item can be removed form the cart from inventory page: ${itemCanBeRemoved}`);
        return itemCanBeRemoved;
    }

    async removeItemFromCart() {
        console.log('Removing item from the cart from the inventory page');
        return await this.#removeButton.click();
    }

    async getItemName() {
        const itemName = await this.#itemName.textContent();
        console.log(`Getting item name on the inventory page: ${itemName}`);
        return itemName;
    }

    async getItemPrice() {
        const itemPrice = await this.#itemPrice.textContent();
        console.log(`Getting item price on the inventory page: ${itemPrice}`);
        return itemPrice;
    }

    async goToCart() {
        console.log('Going to the cart page');
        return await this.#cartBadge.click();
    }
}

module.exports = InventoryPage;