const { Builder, By, until } = require('selenium-webdriver');

(async function checkboxTest() {
    // Launch the browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the page
        await driver.get('https://login.salesforce.com/');

        // Locate the checkbox by its ID and click it
        let checkbox = await driver.findElement(By.id('rememberUn'));
        await checkbox.click(); 

        // Verify if the checkbox is selected
        let isSelected = await checkbox.isSelected();
        if (isSelected) {
            console.log('Checkbox is checked!');
        } else {
            console.log('Checkbox is not checked!');
        }

    } finally {
        // Close the browser
        await driver.quit();
    }
})();
