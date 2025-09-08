import { expect, test } from "@playwright/test";
import { ProductDetailIphone } from "../../src/pages/tredgate-eshop/product_details_id40.ts";

test.describe("Eshop - Iphone info details", () => {
  let productDetailIphone: ProductDetailIphone;

  test.beforeEach(async ({ page }) => {
    const homePage = new ProductDetailIphone(page);
    productDetailIphone = await homePage.openProductDetailId40Page();
  });

  test("Product ID 40 'iPhone' - info, details and add to cart", async () => {
    await test.step("Tooltip buttons in section SM Tests", async () => {
      await expect
        .soft(productDetailIphone.addToWishListButtonSm)
        .toBeVisible();
      await expect
        .soft(productDetailIphone.addToWishListButtonIconSm)
        .toContainClass("fa-heart");
      await expect
        .soft(productDetailIphone.compareThisProductButtonSm)
        .toBeVisible();
      await expect
        .soft(productDetailIphone.compareThisProductIconSm)
        .toContainClass("fa-exchange");
    });

    await test.step("Product header 'Iphone' Tests", async () => {
      await expect.soft(productDetailIphone.productHeader).toBeVisible();
      await expect.soft(productDetailIphone.productHeader).toHaveText("iPhone");
    });

    await test.step("Product Info Tests", async () => {
      await expect.soft(productDetailIphone.productInfoBrandText).toBeVisible();
      await expect
        .soft(productDetailIphone.productInfoBrandText)
        .toHaveText("Brand: Apple");
      await expect
        .soft(productDetailIphone.productInfoProdutCodeText)
        .toBeVisible();
      await expect
        .soft(productDetailIphone.productInfoProdutCodeText)
        .toHaveText("Product Code: product 11");
      await expect
        .soft(productDetailIphone.productInfoAvailabilityText)
        .toBeVisible();
      await expect
        .soft(productDetailIphone.productInfoAvailabilityText)
        .toHaveText("Availability: In Stock");
    });

    await test.step("Product Price Tests", async () => {
      await expect.soft(productDetailIphone.productPrice).toBeVisible();
      await expect.soft(productDetailIphone.productPrice).toHaveText("$101.00");
    });

    await test.step("Product Tax Tests", async () => {
      await expect.soft(productDetailIphone.producTax).toBeVisible();
      await expect
        .soft(productDetailIphone.producTax)
        .toHaveText("Ex Tax: $101.00");
    });

    await test.step("Qty Tests", async () => {
      await expect.soft(productDetailIphone.QtyLabel).toBeVisible();
      await expect.soft(productDetailIphone.QtyLabel).toHaveText("Qty");
      await expect.soft(productDetailIphone.QtyInput).toBeVisible();
      await expect.soft(productDetailIphone.QtyInput).toHaveValue("1");
      await expect.soft(productDetailIphone.QtyInput).toBeEnabled();
    });

    await test.step("Add to Cart Button Tests", async () => {
      await expect.soft(productDetailIphone.addToCartButton).toBeVisible();
      await expect
        .soft(productDetailIphone.addToCartButton)
        .toHaveText("Add to Cart");
    });

    await test.step("Click to Add to Cart Button", async () => {
      await productDetailIphone.clickToAddToCartButton();
      await expect
        .soft(productDetailIphone.successAddedProductIntoCartMessage)
        .toBeVisible();
      await expect
        .soft(productDetailIphone.successAddedProductIntoCartMessage)
        .toContainText("Success: You have added iPhone to your shopping cart!");
    });
  });
});
