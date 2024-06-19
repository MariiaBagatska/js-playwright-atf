import { PageHeader } from "./PageHeader";

export class ItemPage extends PageHeader {
    constructor(page) {
        super(page);
        this.page = page;
        this.#item = this.page.locator('[data-test="inventory-item"]');
        this.#itemName = this.page.locator('[data-test="inventory-item-name"]');
        this.#itemInfo = this.page.locator('[data-test]="inventory-item-desc"');
        this.#itemPrice = this.page.locator('[data-test="inventory-item-price"]');
        this.#addBtn = this.page.locator('[data-test="add-to-cart"]');
        this.#removeBtn = this.page.locator('[data-test="remove"]');

    }

    #item;
    #itemName;
    #itemInfo;
    #itemPrice;
    #addBtn;
    #removeBtn;

    async itemIsVisible() {
        const isVisible = await this.#item.isVisible();
        console.log(`Checking item is visible on the item page: ${isVisible}`);
        return isVisible;
    }

    async itemInfoIsVisible() {
        const isVisible = await this.#item.isVisible();
        console.log(`Checking item information is visible on the item page: ${isVisible}`);
        return isVisible;
    }

    async itemCanBeAddedToCart() {
        const itemCanBeAdded = await this.#item.locator(this.#addBtn).isVisible();
        console.log(`Checking item can be added to the cart from the item page: ${itemCanBeAdded}`);
        return itemCanBeAdded;
    }

    async addItemToCart() {
        console.log('Adding item to the cart from the item page');
        return this.#addBtn.click();
    }

    async itemCanBeRemovedFromCart() {
        const itemCanBeRemoved = await this.#item.locator(this.#removeBtn).isVisible();
        console.log(`Checking item can be removed form the cart from the item page: ${itemCanBeRemoved}`);
        return itemCanBeRemoved;
    }

    async removeItemFromCart() {
        console.log('Removing item from the cart from the item page');
        return await this.#removeBtn.click();
    }

    async getItemName() {
        const itemName = await this.#itemName.textContent();
        console.log(`Getting item name on the item page: ${itemName}`);
        return itemName;
    }

    async getItemPrice() {
        const itemPrice = await this.#itemPrice.textContent();
        console.log(`Getting item price on the item page: ${itemPrice}`);
        return itemPrice;
    }

}
