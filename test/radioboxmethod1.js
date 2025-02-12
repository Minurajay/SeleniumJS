const { Builder, By, until } = require('selenium-webdriver');

async function selectRadioButtonById(driver, radioButtonValue) {
  // Locate the radio button by its ID and click it
  const radioButton = await driver.findElement(By.css(`input[value='${radioButtonValue}']`));
  await radioButton.click();
}

(async function test() {
  const driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // Navigate to the page
    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');
    
    // Call the method to select the Java radio button by ID
    await selectRadioButtonById(driver, 'radio1');
    
    // Optional wait time
    await driver.sleep(1000);
  } finally {
    await driver.quit();
  }
})();
