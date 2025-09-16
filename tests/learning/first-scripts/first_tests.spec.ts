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

// ! screenshoty a videa
/*npx playwright test first_tests.spec.ts
npx playwright show-report - když mám zapnutý screenshoty a videa tak po spuštění testu se mrknu na ten screenshot a video díky tomuto příkazu. A jinak se dají najív src a test-results*/

// ! Scripts - použití v nastavení package.json
/* scripts (json nemá poznámky tak píšu sem) - nastavení v package.json - nastavení zkratky pro spuštění toho čeho chci: například: 
  "scripts": {
    "test": "playwright test",
    "ui": "playwright test --ui",
    "test:chrome": "playwright test --project=chromium"
  }, 
  pak když napíšu "npm test"  tak se mi spustí všechny testy. 
  nebo když napíšu "npm run ui" do terminálu tak se mi spustí ui mód na místo příkazu: "npx playwright test --ui". */

// ! dobrý tip při debuggingu
// ctrl + shift + p reloud - developer reload window - používá se když něco svítí červeně a nemělo by třeba - tak je to dobrý pro refresh reload VS

// ! příkaz do terminálu jak si otevřít trace v samostatným okně a zjstit proč mi  neprochází test - externí trace
/*
npx playwright show-trace 'C:\Users\User\Documents\Git Projects\playwright_academy\test-results\learning-debugging-failing-4f808-ailing-tests-Failing-assert-chromium\trace.zip'*/

// ! debug v terminálu - reporter
/*příkaz pro spuštění terminálového reportéru: tečkovaný: 
npx playwright test --reporter=dot
příkaz pro spuštění terminálového reportéru: formou listu
npx playwright test --reporter=list*/

// ! kontrola regexu - jestli ten co nám vyplyvla AI, tak jestli funguje: regex101.com

// ! http://day.js.org/ knihovna pro generování datumu

// !
//npx playwright show-report 'c:/Users/User/Downloads/playwright-report (6)'
