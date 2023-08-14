// File: login.spec.js

const { test, expect } = require('@playwright/test');

test.describe("Login Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.letsgetchecked.com/account/login"); // Adjust URL as needed
  });

  test("Should successfully log in", async ({ page }) => {
    // Actions
    await page.click('#onetrust-accept-btn-handler');
    await page.fill('#userName', 'mafeporu@gmail.com');
    await page.fill('#password', 'Pa$$w0rd!');
    await page.click('button[type="submit"]');

    // Wait for the .d-block element to be available
    const welcomeMessage = await page.waitForSelector('.d-block', { timeout: 15000 });

    // Get the inner text of the element
    const messageText = await welcomeMessage.innerText();

    // Assertions
    expect(messageText).toContain("Ferdinand");
    await expect(page).toHaveURL('https://www.letsgetchecked.com/account/'); // Adjust URL as needed
  });
});
