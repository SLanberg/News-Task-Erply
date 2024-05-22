import { expect, test } from '@playwright/test';

test('Simple Playwright test', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for the page to fully load
  await page.waitForLoadState('load');

  // Check if the email input field exists
  const emailInput = await page.$('input[placeholder="Email"]');
  expect(emailInput).not.toBeNull();

  // Check if the key input field exists
  const keyInput = await page.$('input[placeholder="Key"]');
  expect(keyInput).not.toBeNull();
});
