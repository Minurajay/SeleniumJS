const { Builder, By } = require('selenium-webdriver');

(async function radioAndCheckBoxDemo() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://training.rcvacademy.com/test-automation-practice-page');

        // Select and click the radio button with ID 'java'
        let javaRadioButton = await driver.findElement(By.id('java'));
        await javaRadioButton.click();

         // Verify if the checkbox is selected
         let isSelected = await javaRadioButton.isSelected();
         if (isSelected) {
             console.log('Clicked');
         } else {
             console.log('Not clicked');
         }

        // Pause for a moment (for demonstration purposes)
        await driver.sleep(1000);

    } /*catch (err) {
        console.error('Error:', err);
    } */finally {
        await driver.quit();
    }
})();
