import { test } from "@playwright/test";
import { fakerCS_CZ as faker } from "@faker-js/faker";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Create new project", async ({ page }) => {
  const name = faker.commerce.product();
  const loginPage = new LoginPage(page);

  await loginPage
    .openPmtool()
    .then((loginPage) => loginPage.login("pw_academy", "Playwright321!"))
    .then((dashboard_page) => dashboard_page.clickProjects())
    .then((projects) => projects.clickAddProject())
    .then((createNewProject) => createNewProject.fillName(name))
    .then((createNewProject) => createNewProject.clickSave())
    .then((Logout) => Logout.clickProfile())
    .then((Logout) => Logout.clickLogout());
});
