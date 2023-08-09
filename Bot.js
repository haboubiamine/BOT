const puppeteer = require('puppeteer');

(async () => {

  const RED_COLORS = [1,2,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
  const BLACK_COLORS = []

  //RESULT_IMAGE

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    // executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox'],
    ignoreDefaultArgs: ['--enable-automation']

  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0); 
  // Navigate the page to a URL
  await page.goto('https://www.grandx.com', {waitUntil: 'load'});

 

  let search_icon = await page.$x('/html/body/div[2]/div[3]/div[1]/ul/li[1]/div/img');
  await search_icon[0].click();

  let Game = await page.$x('/html/body/div[2]/div[3]/div[1]/section[4]/nav/div/div[173]/a')
  await Game[0].click();

  setTimeout(async() => {
    
    console.log("SCREENSHOT")
    await page.screenshot({
      path : './IMG/RESULT_IMAGE.PNG',
      clip: {
        x: 440,
        y: 115,
        width: 400,
        height: 32
      }
    });
  }, 70000);

  
  
 

  

 //await browser.close();

//   await page.mouse.click(1024,469)

  

})();


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}