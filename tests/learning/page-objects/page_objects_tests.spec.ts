import { test } from "@playwright/test";
import { LoginPage } from "src/pages/pmtool/login_page";

test("Page Objects test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openPmtool();
  await loginPage.fillUsername("pw_academy");
  await loginPage.fillPassword("Playwright321!");
  await loginPage.clickLogin();
});
