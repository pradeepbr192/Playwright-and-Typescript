import {test,expect,Locator} from "@playwright/test";
test("text input action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
const textbox: Locator=page.locator("#name");
await expect(textbox).toBeVisible();
await textbox.fill("Playwright Test");
const inputValue:string = await textbox.inputValue();

console.log("Compared successfully", inputValue);
expect(inputValue).toBe("Playwright Test");


//Radio button

const radioButton: Locator=page.locator("#male")
await expect(radioButton).toBeVisible();
await radioButton.check();
const isChecked:boolean=await radioButton.isChecked();
console.log("Radio button checked", isChecked);
expect(isChecked).toBe(true);
});

//Checkbox
test.only("checkbox test",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

})