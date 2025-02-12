// HomePageTests.js
const BaseTest = require('./BaseTest');
const { Builder, By } = require('selenium-webdriver');

class HomePageTests extends BaseTest {
    async verifyHomePageTitle() {
        const title = await this.driver.getTitle();
        console.log(`Page title is: ${title}`);
    }

    async searchForProduct(productName) {
        console.log(`Searching for product: ${productName}`);
        await this.driver.findElement(By.id('search-box')).sendKeys(productName);
        await this.driver.findElement(By.id('search-button')).click();
    }
}

// Usage
(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    const homePageTest = new HomePageTests(driver);

    try {
        await homePageTest.openBrowser('https://example.com');
        await homePageTest.login('user123', 'pass123');
        await homePageTest.verifyHomePageTitle();
        await homePageTest.searchForProduct('Laptop');
    } finally {
        await homePageTest.closeBrowser();
    }
})();
