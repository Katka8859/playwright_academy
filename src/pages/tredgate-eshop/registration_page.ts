import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccoutDropdownMenu: Locator;
  readonly registerDropdownMenu: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccoutDropdownMenu = page.locator("#top-links a i.fa-user");
    this.registerDropdownMenu = page.locator(
      ".dropdown-menu a[href='https://tredgate.com/eshop/index.php?route=account/register']"
    );
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator("input[type='submit']");
  }

  async openRegistrationPage() {
    await this.page.goto(this.url);
    await this.myAccoutDropdownMenu.click();
    await this.registerDropdownMenu.click();
  }

  async fillPersonalDetails(
    firstName: string,
    lastName: string,
    email: string,
    telephoneNumber: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.telephoneInput.fill(telephoneNumber);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    await this.passwordConfirmInput.fill(password);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
