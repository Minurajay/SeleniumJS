const { Builder, By, until } = require('selenium-webdriver');

(async function explicitWaitExample() {
    // Set up the WebDriver for Chrome and builds the WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the Google homepage
        await driver.get('https://www.google.com/');

        // Set an explicit wait timeout of 5 seconds
        const timeout = 5000;

        // try {
            // Wait explicitly for the search box to be present
            let searchBox = await driver.wait(
                until.elementLocated(By.name('q')),
                timeout
            );
            //let searchBox = await driver.wait(unti.elementlocated(By.name('a')), 5000);

            // Verify if the search box is displayed
            console.log('Search box found:', await searchBox.isDisplayed());

            // Enter text into the search box
            await searchBox.sendKeys('Selenium WebDriver');
        // } 
        // catch (error) {
        //     console.log('Element not found within the wait time.');
        // }
    } finally {
        // Close the browser
        await driver.quit();
    }
})();


//wait:- Selenium WebDriver method used to explicitly wait for a specific condition.
//await:- JavaScript keyword used to pause execution until a Promise resolves. It ensures asynchronous code runs sequentially.