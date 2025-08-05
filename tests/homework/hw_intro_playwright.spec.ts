import { test } from "@playwright/test";

test("add item to cart", async ({ page }) => {
  //test code
  await page.goto("https://tredgate.com/eshop/");
  await page.locator("[name='search']").fill("iPhone");
  await page.locator("#search [type='button']").click();
  await page.locator("//a[text()='iPhone']").click();
  await page.locator("#button-cart").click();
  await page.waitForTimeout(2000); //doplněno do testu z důvodu viditelného vložení zboží do košíku i v UI módu pro spuštění testu. Test procházel, avšak v UI nebylo vložení do košíku vidět. Test končil "loadingem".
});
