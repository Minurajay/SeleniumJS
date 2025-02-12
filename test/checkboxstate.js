const { Builder, By, until } = require('selenium-webdriver');

(async function checkCheckbox() {
  // Create a new WebDriver instance (using Chrome in this case)
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the page containing the checkbox
    await driver.get('http://your-website-url.com');

    // Locate the checkbox element
    let checkbox = await driver.findElement(By.id('checkbox-id'));

    // Check if the checkbox is selected (checked)
    let isChecked = await checkbox.isSelected();

    // If the checkbox is unchecked, check it
    if (!isChecked) {
      await checkbox.click();  // Check the checkbox
      console.log('Checkbox is now checked.');
    } else {
      console.log('Checkbox was already checked.');
    }

  } finally {
    // Close the browser window
    await driver.quit();
  }
})();
