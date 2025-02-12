const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function userNameEnter() {
  //Launch the browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Maximize the browser window
    await driver.manage().window().maximize();

    //Open SauceDemo website
    await driver.get('https://www.saucedemo.com/');

    //By relative xpath
    // await driver.findElement(By.xpath('//*[@id="user-name"]')).sendKeys('standard_user'); 

    //By absolute xpath
    // await driver.findElement(By.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input')).sendKeys('standard_user'); 

    //XPath Starts-with Function
    // await driver.findElement(By.xpath('//input[starts-with(@id, "user-name")]')).sendKeys('standard_user'); 

    //XPath Contains Function 
    // await driver.findElement(By.xpath('//input[contains(@name, "user")]')).sendKeys('standard_user'); 

    // XPath AND Operator | XPath OR Operator
    await driver.findElement(By.xpath('//input[@class="input_error form_input" and @name="user-name"]')).sendKeys('standard_user'); 
    await driver.sleep(2000);

   
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Step 7: Quit the browser
    await driver.quit();
  }
})();