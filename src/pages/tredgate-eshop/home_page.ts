import { expect, Locator, Page } from "@playwright/test";
import { RegistrationPage } from "./registration_page.ts";

export class HomePage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccoutDropdownMenu: Locator;
  readonly registerDropdownMenu: Locator;
  readonly logo: Locator;
  readonly shoppingItemsButton: Locator;
  readonly searchPlaceholder: Locator;
  readonly featuredHeader: Locator;
  readonly informationFooterSectionHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccoutDropdownMenu = page.locator("#top-links a i.fa-user");
    this.registerDropdownMenu = page.locator(
      ".dropdown-menu a[href='https://tredgate.com/eshop/index.php?route=account/register']"
    );
    this.logo = page.locator("//img[@title='Tredgate Obchod']");
    this.shoppingItemsButton = page.locator("//span[@id='cart-total']");
    this.searchPlaceholder = page.locator(
      "[id='search'] [placeholder='Search']"
    );
    this.featuredHeader = page.locator("//h3[text()='Featured']");
    this.informationFooterSectionHeader = page.locator(
      "//h5[text()='Information']"
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

  async assertPageLogoIsVisible(): Promise<this> {
    await expect(this.logo).toBeVisible();
    return this;
  }
  async assertShoppingItemsButtonIsVisible(): Promise<this> {
    await expect(this.shoppingItemsButton).toBeVisible();
    return this;
  }

  async assertSearchPlaceholderExist(placeholderText: string): Promise<this> {
    await expect(this.searchPlaceholder).toHaveAttribute(
      "placeholder",
      placeholderText
    );
    return this;
  }

  async assertFeaturedHeaderHasText(featuredText: string): Promise<this> {
    await expect(this.featuredHeader).toHaveText(featuredText);
    return this;
  }

  async assertInformationFooterSectionHeaderHasText(
    informationText: string
  ): Promise<this> {
    await expect(this.informationFooterSectionHeader).toHaveText(
      informationText
    );
    return this;
  }
}
