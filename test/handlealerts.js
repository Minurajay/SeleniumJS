// Confirm
// A confirm box is similar to an alert, except the user can also choose to cancel the message. See a sample confirm.

// This example also shows a different approach to storing an alert:

        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        await alert.dismiss();

// Prompt

// Prompts are similar to confirm boxes, except they also include a text input. Similar to working with form elements, you can use WebDriver’s send keys to fill in a response. This will completely replace the placeholder text. Pressing the cancel button will not submit any text. 

        let alert1 = await driver.switchTo().alert();
        //Type your message
        await alert.sendKeys(text);
        await alert.accept();