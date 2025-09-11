import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Visual Tests", () => {
  test("Simple Visual Test", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
    await expect(page).toHaveScreenshot("simple_test.png");
  });

  test.skip("Failing test", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
    await expect(page).toHaveScreenshot("failing_test.png");
  });

  test("Full Page Visual Test", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
    await expect(page).toHaveScreenshot("full_page_test.png", {
      fullPage: true,
    });
  });

  test.skip("Raising Visual Test Tolerance", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
    await expect(page).toHaveScreenshot("max_diff_pixels.png", {
      fullPage: true,
      maxDiffPixels: 500,
    });
    await expect(page).toHaveScreenshot("max_diff_ratio.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1,
    });
  });
  // ! jak psát maskování
  /*
maxDiffPixels - maximální počet konkrétních pixelů, které se mohou lišit.
maxDiffPixelRatio - číslo od 0 do 1, vyjadřující procento pixelů, které se mohou lišit(0.01 = 1 %)*/

  test("Masskování konkrétních elementů - chci otestovat vše krom nějakého elementu, který zamaskuji", async ({
    page,
  }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
    await expect(page).toHaveScreenshot("masked_elements.png", {
      mask: [page.locator("#hover-box"), page.locator("#main-nav a")],
      fullPage: true,
    });
  });

  test.skip("Hide Elements with CSS", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
    await expect(page).toHaveScreenshot("hidden_elements.png", {
      fullPage: true,
      stylePath: path.resolve(
        __dirname,
        "../../../../../src/pages/assets/visual_tests.css"
      ),
    });

    //require("")
  });
  test("Elements Visual Tests", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/index.html");

    // * Kontrola obrázku
    await expect(page.locator("#playwright-logo")).toHaveScreenshot(
      "logo_test.png"
    );

    // * Kontrola boxu
    await expect(page.locator("//form/..")).toHaveScreenshot("div_test.png");

    // * Kontrola inputu s labelem
    await expect(page.locator('//input[@id="age"]/..')).toHaveScreenshot(
      "input_label_test.png"
    );
  });
});
