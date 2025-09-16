import { test } from "@playwright/test";
import { fakerCS_CZ as faker } from "@faker-js/faker";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Create new project", async ({ page }) => {
  const name = faker.commerce.product();
  const loginPage = new LoginPage(page);
  const username = process.env.PMTOOL_USERNAME as string;
  const password = process.env.PMTOOL_PASSWORD as string;

  await loginPage
    .openPmtool()
    .then((loginPage) => loginPage.login(username, password))
    .then((dashboard_page) => dashboard_page.clickProjects())
    .then((projects) => projects.clickAddProject())
    .then((createNewProject) => createNewProject.fillName(name))
    .then((createNewProject) => createNewProject.clickSave())
    .then((Logout) => Logout.clickProfile())
    .then((Logout) => Logout.clickLogout());
});
