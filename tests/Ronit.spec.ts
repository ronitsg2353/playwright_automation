
import {chromium, test} from "@playwright/test";

test('first test',async({page})=>{

    // const browser=await chromium.launch();
    // const context=await browser.newContext();
    // const page=await context.newPage();

    await page.goto("https://www.google.com/");
    await page.getByRole('button', { name: 'Google apps' }).click();
   await page.locator('iframe[name="app"]').contentFrame().getByRole('link', { name: 'YouTube Music, row 6 of 6 and' }).click();

    console.log("first test");
});

test('second test',()=>{

    console.log("second test");
});
