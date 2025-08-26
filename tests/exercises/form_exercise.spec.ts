import { test, expect } from "@playwright/test";

test.describe("Forms Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/contact.html");
  });

  test("Contact us form", async ({ page }) => {
    await page.locator("#full-name").fill("Katka");
    await page.locator("#email").fill("tralala@gmail.com");
    await page.locator("#comments").fill("Tralala");
    await page.locator("#role").selectOption("student");
    await page.locator("#contact-date").fill("1988-01-01");
    await page.locator("#newsletter").check();
    await page.locator("button[data-testid='button-submit']").click();
    await expect(page.locator("#successBox")).toBeVisible();
  });
});
