import{test,expect}from'@playwright/test';
 test("For loop for heading",async({page}) =>{

await page.goto("https://www.saucedemo.com/inventory.html");
await page.fill("#user-name",'standard_user');
await page.fill("#password",'secret_sauce');
await page.locator("#login-button").click();
await page.waitForSelector(".inventory_item_name")

 })

