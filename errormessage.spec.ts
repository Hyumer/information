
import { test, expect } from '@playwright/test';

test('Проверка на error message при невалиден URL', async ({ page }) => {
  
  await page.goto('https://books.toscrape.com/invalid-page', { waitUntil: 'domcontentloaded' });

  
  const heading = page.locator('h1');
  await expect(heading).toHaveText(/404|Not Found/);
});
