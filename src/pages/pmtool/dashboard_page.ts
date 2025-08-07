import { Locator, Page } from "@playwright/test";

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

  async clickProfile() {
    await this.page.waitForTimeout(2000);
    await this.profile.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}
