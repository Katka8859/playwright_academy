import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
dotenv.config();
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // ! "podmínka, cloud, lokálně" - neboli když to selže, tak na cloudu se ten test opakuje dvakrát. Pokud nejsem v cloudu tak je to vyplé. Lektor nastavuje nulu i na cloudu. Je dobré třeba někde kd eje nestabilní prostředí, ale jinak je lepší to uplně vypnout protože to zpomaluje
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, // ! "podmínka, cloud, lokálně" - worker na cloudu nastaven jen jeden - neběží testy paralelně, ale jeden test za druhým. Lokálně neurčeno.
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html"], ["list"]], //report ve formě list byl na víc přidán
  timeout: 60 * 1000, // ! timeot všech testů - jednoho testu
  expect: {
    timeout: 10 * 1000,
  }, // ! expect je timeout pro assert
  globalTimeout: 1 * 60 * 60 * 1000, // ! Zápis timeoutu 1 hodiny (3600000 ms) - timeout pro celý běh testů
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    actionTimeout: 10 * 1000, // ! nastavuje se do use a je to timeout akcí - klikání
    navigationTimeout: 30 * 1000, // ! timeout navigace - otevírání stránek
    screenshot: "only-on-failure", // ! nastavení screenchotů - "on" = nastaveno na vždy, ale jde nastavit jen při spadnutí
    video: "off", // ! "on" je nastaveno vždy ale dá se nastavit jen při pádu. "off" - vypnuto
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    /*
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },*/

    /* Test against mobile viewports. */
    /*
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
        viewport: {
          height: 250,
          width: 100,
        },
      },
    },
    {
      name: "Small Phone - libovolný název",
      use: {
        ...devices["Pixel 5"],

        viewport: {
          height: 250,
          width: 100,
        },
      },
    },*/
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
