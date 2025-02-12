const { By, Key, Builder } = require("selenium-webdriver"); // Importing required modules
require("chromedriver"); // ChromeDriver to interact with Chrome browser

async function test_case() {
    // Defines an asynchronous function for handling async operations(like loading the webpage, interacting with elements)
    let driver = await new Builder()
        .forBrowser("chrome") // Sets Chrome as the browser
        .build(); // Builds the WebDriver instance

    await driver.get("https://www.google.com"); // Navigates to Google
    await driver.sleep(2000);

    // Maximize the browser window
    await driver.manage().window().maximize();
    

    await driver.findElement(By.name("q")) 
        .sendKeys("Hello world!" , Key.ENTER);  //sends the Enter key after typing the search. Key.RETURN is also correct
        await driver.sleep(2000);

    
    //    await driver.sleep(10000); // Wait for 10 seconds to observe the results

       await driver.quit();     // Close the WebDriver session after operations are complete

}   

// Calls the function and runs the test case
test_case();

