const { Builder, By, Key } = require('selenium-webdriver');

(async function handleMultipleTabs() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open the first tab and navigate to a URL
        await driver.get('https://www.saucedemo.com/');
        console.log(await driver.getTitle()); // Log the title of the first tab

        // Open a new tab
        await driver.switchTo().newWindow('tab');
        await driver.get('https://google.com');
        console.log(await driver.getTitle()); // Log the title of the second tab

        // Get all window handles
        let handles = await driver.getAllWindowHandles();
        let firstTab = handles[0];
        let secondTab = handles[1];

        // Switch back to the first tab
        await driver.switchTo().window(firstTab);
        await driver.navigate().refresh(); // Reload the first tab

        // Switch to the second tab
        await driver.switchTo().window(secondTab);
        await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN); // Perform a search
    } finally {
        await driver.quit();
    }
})();
