import { test, expect } from "@playwright/test";

const formAriaSnapshot = `
- dialog "Info Dialog":
  - heading "Info Dialog" [level=3]
  - paragraph: This dialog provides additional information for accessibility testing.
  - button "Close dialog": Close
`;

test("Aria Snapshot Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/aria-testing.html");
  await expect(page.locator("//div[@role='dialog']")).toMatchAriaSnapshot(
    formAriaSnapshot
  );
});
