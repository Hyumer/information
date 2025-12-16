
import { test, expect } from '@playwright/test';

test('Отваряне на детайли за книга', async ({ page }) => {
  await page.goto('https://books.toscrape.com');
  await page.locator('.product_pod h3 a').first().click();
  await expect(page.locator('.product_main h1')).toBeVisible();
  await expect(page.locator('.price_color')).toBeVisible();
  await expect(page.locator('.availability')).toContainText('In stock');
});
