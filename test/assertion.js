const { By, Key, Builder } = require("selenium-webdriver"); 
const assert = require("assert");
require("chromedriver"); 

async function test_case() {
    let driver = await new Builder()
        .forBrowser("chrome") 
        .build(); 

    await driver.get("https://lambdatest.github.io/sample-todo-app/"); 
    await driver.sleep(2000);

    await driver.manage().window().maximize();
    

    await driver.findElement(By.id("sampletodotext")) 
        .sendKeys("Hello world!" , Key.ENTER);  
        await driver.sleep(2000);

    //assertion

    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    })

    assert.strictEqual(todoText, "Hello world!");  //strictEqual method used to find the match between 2 strings

    

       await driver.quit();     

}   

test_case();

