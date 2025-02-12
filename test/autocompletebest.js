const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');


(async function dropdownDemo() {
  const driver = await new Builder().forBrowser('chrome').build();
  const country = 'Sri Lanka'; // Country to select from the dropdown
  const typedInput = 'Sri'; // Letters to type to trigger suggestions

  try {
    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');
    
    const inputField = await driver.findElement(By.id('autocomplete'));
    await inputField.clear();
    await inputField.sendKeys(typedInput);
    await driver.sleep(500); // Wait for a moment before proceeding

    // Wait for the dropdown to appear (wait for the container to appear)
    await driver.wait(until.elementLocated(By.css('.ui-menu.ui-widget')), 10000); // Increased wait to 10 seconds

    // Find all options in the dropdown
    const options = await driver.findElements(By.css('.ui-menu.ui-widget li div:last-child'));

    // Check if the options array is empty
    if (options.length === 0) {              //Edge case handling checks if the dropdown is empty and stops the test if no options are found. 
      console.error("No options found in the dropdown.");
      return;
    }

    // Iterate through options and select the one that exactly matches.
    for (let option of options) {
      const optionText = await option.getText();
      if (optionText.trim() === country) { //Exact match check
        await driver.wait(until.elementIsVisible(option), 5000); // Waiting for the option to be visible
        await option.click();
        break; // Exit loop once the correct option is selected
      }
    }

    // Wait for the input field's value to fully update with the country name
    await driver.wait(async function() {
      const selectedValue = await inputField.getAttribute('value');
      return selectedValue === country; // Wait until the input value matches 'India'
    }, 10000); 

    // Validate the selected value
    const selectedValue = await inputField.getAttribute('value');
    expect(selectedValue).to.equal(country, `Expected ${country}, but got ${selectedValue}`);

    console.log(`Test passed! Selected country: ${selectedValue}`);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await driver.quit();
  }
})();
