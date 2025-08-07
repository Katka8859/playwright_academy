import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  //test code
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});

//pwt - zkratka kdy vyberu automatický začátek testu a kliknu na pwt-test

// ! užitečné příkazy do terminálu
/*playwright runner for ui příkaz: npx playwright test --ui


otevřít test report: 
npx playwright show-report

spuštění testů - všech: npx playwright test first_tests.spec.ts

pokud mám více prohlížečů a chci spustit jen v jednom prohlížeči test příkaz: npx playwright test first_tests.spec.ts --project=firefo

faker knihovna: https://fakerjs.dev/api/
*/
