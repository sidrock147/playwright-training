import { test, expect } from '@playwright/test';

test('add new song', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Expect a title "to contain" a substring.
  await page.getByText('add', {exact : true}).click();
  await page.locator('input#sngTitle').fill('dumyy');
  await page.locator('input#sngArtist').fill('Micheal jackson');
  await page.locator('input#sngGenre').fill('Rocky');
  await page.locator('input#sngAlbum').fill('First Album');
  await page.locator('input#sngAlbumImg').fill('url');
  await page.locator('textarea#sngTab').fill('yes');
  await page.locator('textarea#sngLyrics').fill('not known');
  await page.getByText('Create Song').click();
  });