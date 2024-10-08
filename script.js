const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const by = require('selenium-webdriver/lib/by');


async function runTest() {
    const productName ='"Nike react phantom run flyknit 2"';
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
       await driver.manage().window().maximize();
       await driver.get("https://demo.evershop.io");
       await driver.findElement(By.xpath(`//div[@class="search-box"]/a[contains(@href,"#")]`)).click();
       await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("nike");
       await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
       await driver.findElement(By.xpath(`//a[contains(@href,"182")]/span[contains(text(),${productName})]`)).click();
       await driver.findElement(By.xpath(`//a[contains(@href,"#") and contains(text(),"S")]`)).click();
       await driver.sleep(3000);
       await driver.findElement(By.xpath(`//a[contains(@href,"#") and contains(text(),"Black")]`)).click();
       await driver.sleep(3000);
       await driver.findElement(By.xpath(`//input[contains(@name,"qty")]`)).clear();
       await driver.findElement(By.xpath(`//input[contains(@name,"qty")]`)).sendKeys(2);
       await driver.findElement(By.xpath(`//button[contains(.,"ADD TO CART")]`)).click();

       await driver.sleep(3000);
   
       await driver.findElement(By.xpath("//a[@class='add-cart-popup-button']")).click();
       await driver.sleep(3000);
       

        
       await driver.quit();
   
}

runTest();

console.log("hello world");