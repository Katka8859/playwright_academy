import { test, expect } from "@playwright/test";
import { fakerCS_CZ as faker } from "@faker-js/faker";

test("POST Request with Body cviceni", async ({ request }) => {
  const username = faker.internet.username();
  const password = faker.internet.password({ length: 20 });
  const email = faker.internet.email();
  const response = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: username, //muzu napsat i jen username a ne username:username
        password: password,
        email: email,
      },
    }
  );
  expect(response.status(), "Register Response is 201").toBe(201);
});
