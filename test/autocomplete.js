const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai'); 

(async function dropdownDemo() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');

    let autocomplete = await driver.findElement(By.id('autocomplete'));
    await autocomplete.clear();
    await autocomplete.sendKeys('United');

    // Wait for the suggestion list to load and select the fourth option
    // let suggestion = await driver.wait(
    //   until.elementLocated(By.xpath('/html/body/ul/li[4]/div')), // XPath for the fourth option
    //   10000 //explicit wait 
    // );
    let suggestion = await driver.wait(
      until.elementLocated(By.css('#ui-id-5')), // Can use css selector as well
      10000 
    );

    await driver.sleep(1000); 

    await suggestion.click();

    await driver.sleep(1000); 

    // Validate the selection using Chai assertion
    let selectedValue = await autocomplete.getAttribute('value');
    expect(selectedValue).to.equal(
      'United States (USA)',
      'Test Failed: Incorrect value selected'
    );

    console.log('Test Passed: Correct value selected');
  } finally {
    await driver.quit();
  }
})();
