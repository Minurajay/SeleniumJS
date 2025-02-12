const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

class DropdownTest {
  constructor(country, typedInput) { //initializes the class
    this.country = country;
    this.typedInput = typedInput;
    this.driver = new Builder().forBrowser('chrome').build();
  }

  async selectCountryFromDropdown() {
    try {
      await this.driver.get('https://rahulshettyacademy.com/AutomationPractice/');
      
      const inputField = await this.driver.findElement(By.id('autocomplete'));
      await inputField.clear();
      await inputField.sendKeys(this.typedInput);
      await this.driver.sleep(500); 

      // Wait for the dropdown to appear (wait for the container to appear)
      await this.driver.wait(until.elementLocated(By.css('.ui-menu.ui-widget')), 10000);

      // Find all options in the dropdown
      const options = await this.driver.findElements(By.css('.ui-menu.ui-widget li div:last-child'));

      // Check if the options array is empty
      if (options.length === 0) {
        console.error("No options found in the dropdown.");
        return;
      }

      // Iterate through options and select the one that exactly matches.
      for (let option of options) {
        const optionText = await option.getText();
        if (optionText.trim() === this.country) {
          await this.driver.wait(until.elementIsVisible(option), 5000);
          await option.click();
          break;
        }
      }

      // Wait for the input field's value to fully update with the country name
      await this.driver.wait(async () => {
        const selectedValue = await inputField.getAttribute('value');
        return selectedValue === this.country;
      }, 10000);

      // Validate the selected value
      const selectedValue = await inputField.getAttribute('value');
      expect(selectedValue).to.equal(this.country, `Expected ${this.country}, but got ${selectedValue}`);

      console.log(`Test passed! Selected country: ${selectedValue}`);
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      await this.driver.quit();
    }
  }
}

// creates instances of the DropdownTest class
const testInstance = new DropdownTest('India', 'ind');
testInstance.selectCountryFromDropdown();

const testInstance1 = new DropdownTest('Argentina', 'arg');
testInstance1.selectCountryFromDropdown();

//Each instance runs the selectCountryFromDropdown() method to perform the test.