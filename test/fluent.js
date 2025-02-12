const { Builder, By, until } = require('selenium-webdriver');

(async function explicitWaitExample() {
    // Set up the WebDriver for Chrome and builds the WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the Google homepage
        await driver.get('https://www.google.com/');

        let searchBox = await driver.wait(until.elementLocated(By.name('aq')),8000, 'Timeout after 8 seconds', 2000);
            

            // Verify if the search box is displayed
            console.log('Search box found:', await searchBox.isDisplayed());

            // Enter text into the search box
            await searchBox.sendKeys('Selenium WebDriver');
        } 
     finally {
        // Close the browser
        await driver.quit();
    }
})();