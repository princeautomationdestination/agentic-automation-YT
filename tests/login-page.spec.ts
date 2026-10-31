import { expect, test } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';

test('TC-01: Open the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login(?:\?.*)?$/);
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});