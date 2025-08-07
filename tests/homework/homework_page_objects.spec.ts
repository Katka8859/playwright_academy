import { test } from "@playwright/test";
import { fakerCS_CZ as faker } from "@faker-js/faker";
import { RegistrationPage } from "src/pages/tredgate-eshop/registration_page.ts";

test("Registration page - create new registration", async ({ page }) => {
  const firstName = faker.person.firstName("female");
  const lastName = faker.person.lastName("female");
  const email = faker.internet.email();
  const telephoneNumber = faker.phone.number({ style: "international" });
  const password = faker.internet.password({ length: 20 });

  const registrationPage = new RegistrationPage(page);
  await registrationPage.openRegistrationPage();
  await registrationPage.fillPersonalDetails(
    firstName,
    lastName,
    email,
    telephoneNumber
  );
  await registrationPage.fillPassword(password);

  await registrationPage.clickContinue();
});
