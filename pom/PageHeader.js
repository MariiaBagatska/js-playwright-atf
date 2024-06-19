export class PageHeader {
    constructor(page) {
        this.page = page;
        this.#menuBtn = this.page.locator('#react-burger-menu-btn'); // no data-test attribute
        this.#cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    }

    #menuBtn;
    #cartBadge;

    async cartBadgeIsVisible() {
        const cartBadgeIsVisible = await this.#cartBadge.isVisible();
        console.log(`Checking cart badge is visible: ${cartBadgeIsVisible}`);
        return cartBadgeIsVisible;
    }

    async goToCart() {
        console.log('Going to the cart page');
        return await this.#cartBadge.click();
    }
}
