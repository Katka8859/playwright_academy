//iFrame (inline frame) je HTML prvek, který slouží k vložení obsahu z jiného dokumentu nebo zdroje přímo do webové stránky. Funguje jako "mini-okno" nebo ohraničený rámeček, který zobrazuje jinou webovou stránku, video, mapu nebo widgety. Tímto způsobem umožňuje integrovat externí obsah na jedné stránce bez nutnosti přímého kopírování a vkládání jeho kódu.
import { test } from "@playwright/test";

test("iFrame Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  const frame = page.frameLocator('[data-testid="test-automation-iframe"]');
  await frame.locator("#name").fill("Pracujeme v iFrame");
});
