import { expect, test } from "@playwright/test";

test.describe("Mouse Actions Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
  });

  test("Mouse Actions", async ({ page }) => {
    await page.locator("#hover-box").hover();
    // ? hover-message se zobrazí až po najetí myši na #hover-box
    //V některých, zejména starších, aplikacích potřebujeme na nějaký element najet myší aby se nám rozbalily další možnosti, v Playwright na to použijeme metodu: hover().

    await expect(page.locator("[data-testid='hover-message']")).toBeVisible();
  });

  test("Drag and Drop", async ({ page }) => {
    // Identifikace a uložení prvků pro přetahování do const
    const draggable = page.locator("#drag1");
    const dropzone = page.locator("#drop1");

    // ověření, že cíl je v zorném poli, pokud ne, zascrolluje se na něj
    await dropzone.scrollIntoViewIfNeeded();
    await draggable.dragTo(dropzone);
    await expect(page.locator("#dropped-message")).toBeVisible();
  });

  test("Drag and Drop - alternative if dragTo does not work", async ({
    page,
  }) => {
    const draggable = page.locator("#drag1");
    const dropzone = page.locator("#drop1");

    await dropzone.scrollIntoViewIfNeeded();

    // ? Vytažení souřadnic prvků draggable a dropzone
    const draggableBox = await draggable.boundingBox();
    const dropzoneBox = await dropzone.boundingBox();

    if (!draggableBox || !dropzoneBox) {
      throw new Error(
        "Unable to determine bounding boxes for drag and drop elements"
      );
    }

    // ? přetáhnutí prvku draggable do dropzone pomocí souřadnic. Vypočítává se střed prvků
    await page.mouse.move(
      draggableBox.x + draggableBox.width / 2, // ? draggableBox.x je x souřadnice draggableBox vlevo nahoře. Přičítáme šířku a dělíme dvěma, abychom dostali střed
      draggableBox.y + draggableBox.height / 2 // ? draggableBox.y je y souřadnice draggableBox vlevo nahoře. Přičítáme výšku a dělíme dvěma, abychom dostali střed
    );
    await page.mouse.down();
    await page.mouse.move(
      dropzoneBox.x + dropzoneBox.width / 2,
      dropzoneBox.y + dropzoneBox.height / 2
    );
    await page.mouse.up();
    await expect(page.locator("#dropped-message")).toBeVisible();
  });

  test("Double Click", async ({ page }) => {
    await page.locator('[data-testid="double-click-box"]').dblclick();
    await expect(
      page.locator('[data-testid="double-click-box"]')
    ).toContainClass("action-active"); // "action-active" - to je část klásy "div[class='action-box action-active']" a zkontrolujem že tam je část té klásy, která vyskočí nebo se objeví až po nějaké akci
  });

  test("Click and hold", async ({ page }) => {
    const hold = page.locator(".hold-button");
    await hold.click({ delay: 2000 }); //když chci click podržet déle
    await expect(page.locator(".hold-button")).toContainClass("hold-button");
    await hold.click(); //tahle akce je tam navíc, aby nám ten hold nezmizel - drží, assesrtuje a stále drží
  });

  test("iFrame test", async ({ page }) => {
    const frame = page.frameLocator('[data-testid="test-automation-iframe"]');
    await frame.locator("#name").fill("Martin");
    await expect(frame.locator("#name")).toHaveValue("Martin");
  });
});
