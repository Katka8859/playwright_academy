import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class DashboardPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool/";
  readonly profile: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profile = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
  }

  async clickProfile(): Promise<this> {
    await this.page.waitForTimeout(3000);
    await this.profile.click();
    return this;
  }

  async clickLogout(): Promise<LoginPage> {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }

  async logout(): Promise<LoginPage> {
    await this.clickProfile();
    await this.clickLogout();
    return new LoginPage(this.page);
  }
}
