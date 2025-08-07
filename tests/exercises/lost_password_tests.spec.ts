import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Lost Password E2E", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .openPmtool()
    .then((loginPage) => loginPage.clickPasswordForgotten())
    .then((restorePasswordPage) =>
      restorePasswordPage.typeUsername("lost_password_user")
    )
    .then((restorePasswordPage) =>
      restorePasswordPage.typeEmail("lost_password@tredgate.cz")
    )
    .then((restorePasswordPage) => restorePasswordPage.clickSend());
});

test("Lost Password test - Click back", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .openPmtool()
    .then((loginPage) => loginPage.clickPasswordForgotten())
    .then((restorePasswordPage) => restorePasswordPage.clickBack());
});
