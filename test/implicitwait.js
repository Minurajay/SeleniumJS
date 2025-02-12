const { Builder, By } = require('selenium-webdriver');

(async function implicitWaitExample() {
    // Set up the WebDriver for Chrome and builds the WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Set an implicit wait of 10 seconds
        await driver.manage().setTimeouts({ implicit: 10000 });
 
        await driver.get('https://www.google.com/');

        try {
            let searchBox = await driver.findElement(By.name('q1'));
            console.log('Search box found:', await searchBox.isDisplayed());
            
            await searchBox.sendKeys('Selenium WebDriver');
        } catch (error) {
            console.log('Error', error.message);
        }
    } finally {
        await driver.quit();
    }
})();
