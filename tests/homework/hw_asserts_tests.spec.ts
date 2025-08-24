import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page.ts";

test.describe("Eshop - asserts of atributes on home page", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openHomePage();
  });

  test("Checking the visibility of logo", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.assertPageLogoIsVisible();
  });

  test("Checking the visibility of button cart item", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.assertShoppingItemsButtonIsVisible();
  });

  test("Placeholder search is present on page", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.assertSearchPlaceholderExist("Search");
  });

  test("Featured header has correct text", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.assertFeaturedHeaderHasText("Featured");
  });

  test("Infomation header has correct text", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.assertInformationFooterSectionHeaderHasText("Information");
  });
});
