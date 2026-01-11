import test from "@playwright/test";

test("login test",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button").click();
    


    await page.waitForSelector('h6:has-text("Dashboard")')
    const dashboard = await page.locator('h6:has-text("Dashboard")').textContent();
    console.log(dashboard)


if (dashboard === "Dashboard")
    
    {
    console.log("Login successful");

    await page.locator('button[title="Assign Leave"] svg g path').click();
   // const btnclick = await page.locator('button[title="Assign Leave"] svg g path').textContent();
    console.log("Clicked on Assign Leave button");

    // Wait for the Assign Leave page to load

    await page.waitForSelector('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
    const assignleave = await page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').textContent();
    console.log(assignleave)
    if (assignleave === "Leave") {
        console.log("Navigated to Assign Leave page successfully");

    }
    else if (assignleave !== "Leave") {
        console.log("Failed to navigate to Assign Leave page");


    }
   else {   
    
    console.log("Login failed");
   }
}
});