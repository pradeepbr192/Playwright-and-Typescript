import {test,expect} from '@playwright/test'
test("For in loop", async ({page})=> {

await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

const locators =
{
 Name: "#name",
 Email: "#email",
 
}

const data = 

{
Name: "Pradeep",
Email: "pradeep123@gmail.com",
}

for (let key in data)
{

if(locators[key])
{

await page.fill(locators[key],data[key]); //(locators, value)

}

await page.waitForTimeout(3000)
}

})