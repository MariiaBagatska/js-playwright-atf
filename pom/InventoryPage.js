import { PageHeader } from '../pom/PageHeader';

export class InventoryPage extends PageHeader {
    constructor(page) {
        super(page);
        this.page = page;
        this.#item = this.page.locator('[data-test="inventory-item"]').first();
        this.#itemName = this.page.locator('[data-test="inventory-item-name"]').first();
        this.#itemPrice = this.page.locator('[data-test="inventory-item-price"]').first();
        this.#addBtn = this.page.locator('.btn_primary').first(); // because other locators are dynamic
        this.#removeBtn = this.page.locator('.btn_secondary').first(); // because other locators are dynamic
    }

    #item;
    #itemName;
    #itemPrice;
    #addBtn;
    #removeBtn;

    async itemIsVisible() {
        const isVisible = await this.#item.isVisible();
        console.log(`Checking item is visible on the inventory page: ${isVisible}`);
        return isVisible;
    }

    async itemCanBeAddedToCart() {
        const itemCanBeAdded = await this.#item.locator(this.#addBtn).isVisible();
        console.log(`Checking item can be added to the cart from the inventory page: ${itemCanBeAdded}`);
        return itemCanBeAdded;
    }

    async addItemToCart() {
        console.log('Adding item to the cart from the inventory page');
        return this.#addBtn.click();
    }

    async itemCanBeRemovedFromCart() {
        const itemCanBeRemoved = await this.#item.locator(this.#removeBtn).isVisible();
        console.log(`Checking item can be removed form the cart from the inventory page: ${itemCanBeRemoved}`);
        return itemCanBeRemoved;
    }

    async removeItemFromCart() {
        console.log('Removing item from the cart from the inventory page');
        return await this.#removeBtn.click();
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

}
