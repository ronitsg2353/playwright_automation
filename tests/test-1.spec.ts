import {chromium,expect, Locator, test} from "@playwright/test"

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

test("locator get by method 1",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByAltText("company-branding").isVisible();
await page.getByPlaceholder("Username",{exact:true}).fill("Admin");
await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
await page.getByRole('button', { name: 'Login' }).click();
await page.getByText("company-branding").isVisible();
});


test ("locator get by method 2",async({page})=>{

await page.goto("https://www.saucedemo.com/");
const pagetitle:String|null=await page.getByText("Swag Labs",{exact:true}).textContent();
console.log(pagetitle);
const username:Locator=await page.getByPlaceholder("Username");
username.fill("standard_user");
//await page.waitForTimeout(2000);
const password:Locator=await page.getByPlaceholder("Password");
password.fill("secret_sauce");
await page.locator('[data-test="login-button"]').click();
await page.getByAltText("Sauce Labs Backpack").isVisible();
//await page.getByRole('button',{name:'add-to-cart-sauce-labs-backpack'}).click();
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

});
