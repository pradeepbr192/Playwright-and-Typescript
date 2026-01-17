import{test,expect}from'@playwright/test';
 test("For loop for heading",async({page}) =>{

await page.goto("https://www.saucedemo.com/inventory.html");
await page.fill("#user-name",'standard_user');
await page.fill("#password",'secret_sauce');
await page.locator("#login-button").click();
const landpage = await page.locator(".app_logo").textContent();
console.log(landpage)
await page.waitForTimeout(3000);

if (landpage == "Swag Labs")
{
    console.log("Login Successful")
}

else
{

    console.log("Login Unsuccessful")
}

const products = page.locator(".inventory_item_name");
const count = await products.count();
console.log(count)

for (let i =0; i < count; i++)
{

const name = await products.nth(i).innerText();
console.log(name)

}

 })

