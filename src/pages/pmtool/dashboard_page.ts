import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";
import { ProjectsPage } from "./projects_page.ts";

export class DashboardPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool/";
  readonly profile: Locator;
  readonly logoutButton: Locator;
  readonly projectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profile = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.projectButton = page.locator("#Projects");
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

  async clickProjects(): Promise<ProjectsPage> {
    await this.page.waitForTimeout(2000);
    await this.projectButton.click();
    return new ProjectsPage(this.page);
  }
}
