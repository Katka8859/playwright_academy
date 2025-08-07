import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class RestorePasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly sendButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@placeholder='Username']");
    this.emailInput = page.locator("//input[@placeholder='Email']");
    this.sendButton = page.locator("//button[@type='submit']");
    this.backButton = page.locator("#back-btn");
  }

  async typeUsername(username: string): Promise<this> {
    await this.usernameInput.fill(username);
    return this;
  }

  async typeEmail(email: string): Promise<this> {
    await this.emailInput.fill(email);
    return this;
  }

  async clickSend(): Promise<LoginPage> {
    await this.sendButton.click();
    return new LoginPage(this.page);
  }

  async clickBack(): Promise<LoginPage> {
    await this.backButton.click();
    return new LoginPage(this.page);
  }
}
