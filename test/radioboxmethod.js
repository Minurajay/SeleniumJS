const { Builder, By, until } = require('selenium-webdriver');

async function selectRadioButtonById(driver, radioButtonId) {
  // Locate the radio button by its ID and click it
  const radioButton = await driver.findElement(By.id(radioButtonId));
  await radioButton.click();
}

(async function test() {
  const driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // Navigate to the page
    await driver.get('https://training.rcvacademy.com/test-automation-practice-page');
    
    // Call the method to select the Java radio button by ID
    await selectRadioButtonById(driver, 'java');
    
    // Optional wait time
    await driver.sleep(1000);
  } finally {
    await driver.quit();
  }
})();
