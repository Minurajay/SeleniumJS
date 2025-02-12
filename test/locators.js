const { Builder, By, Key } = require("selenium-webdriver"); // Import Selenium modules
require("chromedriver"); // Ensure ChromeDriver is installed and linked

(async function classLocator() {
    // Create a WebDriver instance for Chrome
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Maximize the browser window
        await driver.manage().window().maximize();

        // Navigate to Google homepage
        await driver.get("https://www.google.com");

        //By id locator
        //  let searchBar = await driver.findElement(By.id("APjFqb"));

        // Use a class locator to find the search bar
        // let searchBar = await driver.findElement(By.className("gLFyf")); 

        //By name locator
        // let searchBar = await driver.findElement(By.name("q"));

        //By relative xpath
        // let searchBar = await driver.findElement(By.xpath('//*[@id="APjFqb"]'));

        //By absolute xpath
        // let searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div[1]/div[2]/textarea'));

        // Locate the search bar where the class starts with 'gLF'
        let searchBar = await driver.findElement(By.xpath('//input[starts-with(@id, "APjFqb")]'));


        await searchBar.sendKeys("Selenium WebDriver", Key.RETURN); // Enter text and press RETURN

        // Wait to observe results (optional)
        await driver.sleep(5000);
    } finally {
        // Close the browser session
        await driver.quit();
    }
})();
