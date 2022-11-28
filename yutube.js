const { Builder, Key, By, Capabilities } = require("selenium-webdriver");
const chromeCapabilities = Capabilities.chrome();
const assert = require('assert');

async function TC_001(){
  chromeCapabilities.set('chromeOptions', {args:['--headless']});
  let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();

  await driver.get('https://www.youtube.com/c/DigitalHouseSchool');
  await driver.manage().window().maximize();


  let buttonTextToCompare = await driver.findElement(By.id('subscriber-count')).getAttribute('arial-label');
  assert.strictEqual(buttonTextToCompare, "4,070 suscriptores");
  console.log("Subscriber count is correct");

  await driver.sleep(10000);

  await driver.quit();

}

TC_001();

