const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function validateProductNames() {
  // Step 1: Launch the browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Maximize the browser window
    await driver.manage().window().maximize();

    // Step 2: Open SauceDemo website
    await driver.get('https://www.saucedemo.com/');

    // Step 3: Login with valid credentials
    await driver.findElement(By.id('user-name')).sendKeys('standard_user'); 
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');   
    await driver.findElement(By.id('login-button')).click();               

    // Step 4: Wait for the inventory page to load
    await driver.wait(until.titleContains('Swag Labs'), 5000);

    // Step 5: Find product names on the inventory page
    let productNames = await driver.findElements(By.css('.inventory_item_name'));

    // Step 6: Loop through the product names and log them
    for (let i = 0; i < productNames.length; i++) {
      let name = await productNames[i].getText(); // Get the text of each product name
      console.log(`Product ${i + 1}: ${name}`);
    }
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Step 7: Quit the browser
    await driver.quit();
  }
})();
