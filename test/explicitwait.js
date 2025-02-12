const { Builder, By, until } = require('selenium-webdriver');

(async function explicitWaitRevealTextBox() {
    // Set up the WebDriver for Chrome and build the WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the dynamic loading page
        await driver.get('https://www.selenium.dev/selenium/web/dynamic.html');

        // Locate and click the "Reveal" button
        let revealButton = await driver.findElement(By.id('reveal'));
        await revealButton.click();
        
        // checks if the element is present in the DOM
        let revealed = await driver.findElement(By.id('revealed'));
        // Wait for the element to be visible on the screen
        await driver.wait(until.elementIsVisible(revealed), 5000);

        // Enter text into the revealed text box
        await revealed.sendKeys('Hello, Selenium!');
        // await driver.sleep(3000);

        console.log('Text entered into the revealed text box.');
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
