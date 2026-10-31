import type { Page } from '@playwright/test';

export class LoginPage {
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(private readonly page: Page) {
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }
}