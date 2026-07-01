import {test} from "@playwright/test"

test('first test ',async({page})=>{

  await page.goto("https://www.saucedemo.com/");
  await page.locator("//input[@placeholder='Username']").fill("standard_user");
  await page.locator("xpath=//input[@id='password']").fill("secret_sauce");
  await page.locator("input#login-button").click();
  await page.locator("text=Sauce Labs Backpack").click();
 // await page.locator("button#add-to-cart-sauce-labs-backpack").click();
  //await page.locator("//button[text()='Add to cart']").dblclick();
//await page.locator("data-test=add-to-cart-sauce-labs-backpack").click();
await page.locator("//button[@data-test='add-to-cart']").click();

})

test("locator method with option argument",async({page})=>{

  await page.goto("https://www.saucedemo.com/");
  await page.locator(".form_group",{has:page.locator("input#user-name")}).click();
 await page.locator(".form_group",{has:page.locator("input#user-name")}).pressSequentially("standard_user");
  await page.locator(".form_group",{has:page.locator("input#password")}).click();
  await page.locator(".form_group",{has:page.locator("input#password")}).pressSequentially("secret_sauce");
  await page.locator("//input[@id='login-button']").click();

  await page.locator("//a",{hasText:"Sauce Labs Backpack"}).click();
  page.locator(".inventory-item-description", { hasNotText: /sauce.*/});
});

test("locator option argument",async({page})=>{

  await page.goto("")

});