
import { test, expect } from '@playwright/test';

test('Навигация към категория Travel', async ({ page }) => {
  await page.goto('https://books.toscrape.com');
  await page.click('a[href="catalogue/category/books/travel_2/index.html"]');
  await expect(page.locator('h1')).toHaveText('Travel');
});

