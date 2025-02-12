const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

(async function handleAlertDemo() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');

    const textBox = await driver.findElement(By.id('name'));
    const inputText = 'Test User';
    await textBox.clear();
    await textBox.sendKeys(inputText);

    const confirmButton = await driver.findElement(By.id('confirmbtn'));
    await confirmButton.click();

    await driver.wait(until.alertIsPresent(), 5000);

    // Switch to the alert and validate the text
    const alert = await driver.switchTo().alert();
    const alertText = await alert.getText();

    const expectedText = `Hello ${inputText}, Are you sure you want to confirm?`;  //the ${inputText} expression is used to insert the value of the inputText variable

    // Assert the alert text matches the expected text
    expect(alertText).to.equal(
      expectedText,
      'Test Failed: The alert text does not match the expected text.'
    );
    await driver.sleep(1000); 

    // Accept the alert (Click OK)
    await alert.accept();

    console.log('Test Passed successfully');
  } catch (err) {
    console.error('Test Failed:', err);
  } finally {
    // Quit the driver
    await driver.quit();
  }
})();
