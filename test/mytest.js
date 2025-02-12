const { Builder, By, Key, until } = require('selenium-webdriver');

(async function searchAndNavigate() {
    // Initialize the browser (default is Chrome)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to Google
        await driver.get('https://www.google.com');

        // Locate the search bar and type "Selenium"
        const searchBar = await driver.findElement(By.name('q'));
        await searchBar.sendKeys('Selenium', Key.RETURN);

        // Wait for the search results to load and display the first result
        await driver.wait(until.elementLocated(By.css('h3')), 5000);

        // Click the first search result
        const firstResult = await driver.findElement(By.css('h3'));
        await firstResult.click();

        // Wait for the new page to load
        await driver.wait(until.titleContains('Selenium'), 5000);

        // Output the current page title to verify navigation
        console.log(await driver.getTitle());
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
