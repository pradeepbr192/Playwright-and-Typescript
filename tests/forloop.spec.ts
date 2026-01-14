import{test,expect}from'@playwright/test';

test('Checkbox test',async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    const checkbox1= await page.$$('input[type="checkbox"]');
    console.log("Total checkboxes found:", checkbox1.length);
    for (let i=0;i<checkbox1.length;i++){
        const isChecked1=await checkbox1[i].isChecked(); 
    

     if (!isChecked1) {
        await checkbox1[i].check();
        await page.waitForTimeout(1000); // Wait for 1 second to observe the action
        console.log(`Checkbox ${i+1} is checked.`);
     }}
       
     for (let i = 0; i < checkbox1.length; i++) {
     expect(await checkbox1[i].isChecked()).toBe(true);

     }
        console.log(`All checkboxes are checked successfully.`);
    })
    test.only('Drop down', async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

        const statesdrpdown = await page.locator('#state');
        const options =  statesdrpdown.locator('option');
        const count = await options.count();
    console.log(count);
    
    for (let i = 0; i < count; i++) {
        const optionText = await options.nth(i).textContent();
        console.log(`Option ${i + 1}: ${optionText}`);
    }

    let israjasthanselected = false;

    for (let i = 0; i < count; i++) {
        const optionText = await options.nth(i).textContent();
        if (optionText?.trim() === 'Rajasthan') {
            await statesdrpdown.selectOption({ label: 'Rajasthan' });
            israjasthanselected = true;
            console.log('Rajasthan option is selected.');
            break;
        }
    }
})
    