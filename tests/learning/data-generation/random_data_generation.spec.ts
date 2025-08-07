import { test } from "@playwright/test";
import { fakerCS_CZ as faker } from "@faker-js/faker";
import { LoginPage } from "src/pages/pmtool/login_page";

test("Testing Data Generation with Faker", async ({ page }) => {
  //const firstName = faker.person.firstName("female");
  const userName = faker.internet.username();
  //const lastName = faker.person.lastName("female");
  //const email = faker.internet.email();
  const password = faker.internet.password({ length: 20 });
  //const address = faker.location.streetAddress();
  //const insect = faker.animal.insect();

  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
  await loginPage.login(userName, password);
});
