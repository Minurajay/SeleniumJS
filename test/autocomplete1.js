const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');


(async function dropdownDemo() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    const OptionToSelect = 'United States (USA)';

    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');

    let autocomplete = await driver.findElement(By.id('autocomplete'));
    await autocomplete.clear();
    await autocomplete.sendKeys('United');

    // Wait for the dropdown menu to appear and the options are fully loaded before interacting with them
    await driver.wait(until.elementsLocated(By.css('.ui-menu.ui-widget li div:last-child')), 5000);  

    // Get all options using the specified CSS selector
    const options = await driver.findElements(By.css('.ui-menu.ui-widget li div:last-child')); //array

    //Using a for...of loop:- To iterate through the array.
    for (let option of options) {                   //Declares a variable named option for use inside the loop. holds the current value from the options array during each iteration.
      const optionText = ((await option.getText()));
      console.log(`Option found: ${optionText}`); 
      if (optionText === OptionToSelect) {
        await option.click();
        break;
      }
    }

    await driver.sleep(1000); 

    // // Validate that the correct value is selected
    // const selectedValue = await autocomplete.getAttribute('value');  //The input field's value is updated dynamically by JavaScript, 
    // if (selectedValue === OptionToSelect) {                          //even though the value attribute in the HTML remains unchanged.
    //   console.log('Test Passed: Correct value selected');
    // } else {
    //   console.log(`Test Failed: Incorrect value selected. Found: ${selectedValue}`);
    // }

    // Validate that the correct value is selected, Use assertions whenever possible
    const selectedValue = await autocomplete.getAttribute('value');
    expect(selectedValue).to.equal(
      OptionToSelect,
      `Test Failed: Incorrect value selected. Found: ${selectedValue}`
    );
    
    console.log('Test Passed: Correct value selected');

  } 
  finally {
    await driver.quit();
  }
})();

// document.getElementById('autocomplete').value 
//  browser's console to see the value of the input field after selecting an option.

