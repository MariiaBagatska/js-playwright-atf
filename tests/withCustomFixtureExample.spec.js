import { test } from '../customFixtures.js'; // includes auth fixture with authentification
import { expect } from '@playwright/test';
import { InventoryPage } from '../pom/InventoryPage';
import { CartPage } from '../pom/CartPage.js';

test.beforeEach(async ({ page }) => {
    console.log(`Starting ${test.info().title}`);
});

test.afterEach(async ({ page }) => {
    console.log(`Finishing ${test.info().title} with status ${test.info().status}`);

    if (test.info().status != test.info().expectedStatus) {
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    }
});

test('Add item to the cart from Inventory page using custom fixture for login', async ({ page, auth }) => {
    page.goto('/inventory.html');
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.itemIsVisible()).toBeTruthy();
    await expect(inventoryPage.itemCanBeAddedToCart()).toBeTruthy();
    const inventoryItemName = await inventoryPage.getItemName();
    const inventoryItemPrice = await inventoryPage.getItemPrice();

    await inventoryPage.addItemToCart();

    await expect(inventoryPage.cartBadgeIsVisible()).toBeTruthy();
    await expect(inventoryPage.itemCanBeRemovedFromCart()).toBeTruthy();

    await inventoryPage.goToCart();
    const cartPage = new CartPage(page);
    await expect(cartPage.itemIsVisible()).toBeTruthy();
    const cartItemName = await cartPage.getItemName();
    const cartItemPrice = await cartPage.getItemPrice();

    console.log('Verifying the item in the cart is the same as the item added from the inventory page');
    expect(inventoryItemName).toBe(cartItemName);
    expect(inventoryItemPrice).toBe(cartItemPrice);
});
