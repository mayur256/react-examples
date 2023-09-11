import { test, expect } from "@playwright/test";

test("homepage has E2E Testing with Playwright", async ({ page }) => {
    // It will go to homepage of our React App
    await page.goto("http://127.0.0.1:5173/");

    await page.screenshot({ path: "screenshot/before-input.png" });

    // Retreive the input
    const nameInput = await page.locator("id=nameInput");
    // Enter value to the field
    await nameInput.fill('Brix');
    // make assertion
    await expect(nameInput).toHaveValue('Brix');

    await page.screenshot({ path: "screenshot/after-input.png" });
});