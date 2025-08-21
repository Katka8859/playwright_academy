import { Locator, Page } from "@playwright/test";
import { RegistrationPage } from "./registration_page.ts";

export class HomePage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccoutDropdownMenu: Locator;
  readonly registerDropdownMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccoutDropdownMenu = page.locator("#top-links a i.fa-user");
    this.registerDropdownMenu = page.locator(
      ".dropdown-menu a[href='https://tredgate.com/eshop/index.php?route=account/register']"
    );
  }

  async openHomePage(): Promise<this> {
    await this.page.goto(this.url);
    return this;
  }

  async openRegistrationPage(): Promise<RegistrationPage> {
    await this.myAccoutDropdownMenu.click();
    await this.registerDropdownMenu.click();
    return new RegistrationPage(this.page);
  }
}
