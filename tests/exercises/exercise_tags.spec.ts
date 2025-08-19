import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("tags exercise", { tag: "@exercise" }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .openPmtool()
    .then((loginPage) => loginPage.login("pw_skoleni", "TEG2023"));
});
