import { Locator, Page } from "@playwright/test";

export class ProductDetailIphone {
  readonly page: Page;
  readonly url =
    "https://tredgate.com/eshop/index.php?route=product/product&manufacturer_id=8&product_id=40";
  readonly addToWishListButtonSm: Locator;
  readonly addToWishListButtonIconSm: Locator;
  readonly compareThisProductButtonSm: Locator;
  readonly compareThisProductIconSm: Locator;
  readonly productHeader: Locator;
  readonly productInfoBrandText: Locator;
  readonly productInfoProdutCodeText: Locator;
  readonly productInfoAvailabilityText: Locator;
  readonly productPrice: Locator;
  readonly producTax: Locator;
  readonly QtyLabel: Locator;
  readonly QtyInput: Locator;
  readonly addToCartButton: Locator;
  readonly successAddedProductIntoCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToWishListButtonSm = page.locator(
      "//div[@class='col-sm-4']/..//button[@data-original-title='Add to Wish List']"
    );
    this.addToWishListButtonIconSm = page.locator(
      "//div[@class='col-sm-4']/..//i[@class='fa fa-heart']"
    );
    this.compareThisProductButtonSm = page.locator(
      "//div[@class='col-sm-4']/..//button[@data-original-title='Compare this Product']"
    );
    this.compareThisProductIconSm = page.locator(
      "//div[@class='col-sm-4']/..//i[@class='fa fa-exchange']"
    );
    this.productHeader = page.locator("//h1[contains(text(), 'iPhone')]");
    this.productInfoBrandText = page.locator(
      "//li[contains(text(), 'Brand: ')]"
    );
    this.productInfoProdutCodeText = page.locator(
      "//li[contains(text(), 'Product Code: product 11')]"
    );
    this.productInfoAvailabilityText = page.locator(
      "//li[contains(text(), 'Availability: In Stock')]"
    );
    this.productPrice = page.locator(
      "//div[@class='col-sm-4']/..//h2[contains(text(), '$101.00')]"
    );
    this.producTax = page.locator(
      "//div[@class='col-sm-4']/..//li[contains(text(), 'Ex Tax: $101.00')]"
    );
    this.QtyLabel = page.locator("//label[@for='input-quantity']");
    this.QtyInput = page.locator("//input[@name='quantity']");
    this.addToCartButton = page.locator("//button[@id='button-cart']");
    this.successAddedProductIntoCartMessage = page.locator(
      "//div[@class='alert alert-success alert-dismissible']"
    );
  }
  async openProductDetailId40Page(): Promise<this> {
    await this.page.goto(this.url);
    return this;
  }

  async clickToAddToCartButton(): Promise<this> {
    await this.addToCartButton.click();
    return this;
  }
}
