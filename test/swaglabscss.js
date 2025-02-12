const { Builder, By, Key } = require('selenium-webdriver');

(async function login() {
    // Initialize WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the SauceDemo website
        await driver.get('https://www.saucedemo.com/');
        await driver.manage().window().maximize();

        // CSS Selector: Tag and ID
        let usernameField = await driver.findElement(By.css('input#user-name'));
        await usernameField.sendKeys('standard_user');

        // CSS Selector: Tag and Attribute
        let passwordField = await driver.findElement(By.css('input[placeholder="Password"]'));
        await passwordField.sendKeys('secret_sauce');

        // CSS Selector: Tag and Class
        let loginButton = await driver.findElement(By.css('input.btn_action'));

        // let loginButton = await driver.findElement(By.css('input.submit-button '));
        // let loginButton = await driver.findElement(By.css('input.submit-button.btn_action'));
        await loginButton.click();

        // Wait for the page to load
        await driver.sleep(2000);

        // CSS Selector: Tag, Class, and Attribute
        let firstItemAddToCart = await driver.findElement(By.css('button.btn_primary[data-test="add-to-cart-sauce-labs-backpack"]'));

        // let firstItemAddToCart = await driver.findElement(By.css('button.btn.btn_primary.btn_small.btn_inventory[data-test="add-to-cart-sauce-labs-backpack"]'));
        // let firstItemAddToCart = await driver.findElement(By.css('button.btn[data-test="add-to-cart-sauce-labs-backpack"]'));
        // let firstItemAddToCart = await driver.findElement(By.css('button.btn_small.btn_inventory[data-test="add-to-cart-sauce-labs-backpack"]'));
        // let firstItemAddToCart = await driver.findElement(By.css('button.btn_small[data-test="add-to-cart-sauce-labs-backpack"]'));
        // let firstItemAddToCart = await driver.findElement(By.css('button.btn_inventory[data-test="add-to-cart-sauce-labs-backpack"]'));


        await firstItemAddToCart.click();

        // Wait to observe the interaction
        await driver.sleep(2000);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
