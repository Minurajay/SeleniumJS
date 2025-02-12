//Wait until a loading spinner disappears before proceeding with further actions.
let driver = new Builder().forBrowser('chrome').build();

async function waitForSpinner() {
    await driver.get('https://example.com');
    
    // Wait for spinner to disappear using a while loop
    let spinner = await driver.findElement(By.id('loadingSpinner'));
    
    while (await spinner.isDisplayed()) {
        console.log("Waiting for the spinner to disappear...");
    }

    console.log("Spinner disappeared, proceeding with the test.");
}

waitForSpinner();

// Retry clicking on a button until it becomes clickable.
let driver1 = new Builder().forBrowser('chrome').build();

async function clickButton() {
    await driver.get('https://example.com');
    
    let button = await driver1.findElement(By.id('submitButton'));
    let isClickable = false;
    
    // Retry until the button becomes clickable
    while (!isClickable) {
        try {
            await button.click();
            isClickable = true;  // Button clicked successfully
            console.log("Button clicked!");
        } catch (error) {
            console.log("Button not clickable, retrying...");
            await driver1.sleep(1000);  // Wait for 1 second before retrying
        }
    }
}

clickButton();

//pagination
