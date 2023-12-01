import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('click search link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByText('Search', { exact: true }).click();
});

test('click API Link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the API link.
  await page.getByText('API', { exact: true }).click();

  await expect(page.getByText('APIResponse',{exact: true})).toBeVisible();
});
