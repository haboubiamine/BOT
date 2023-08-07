const puppeteer = require('puppeteer');

(async () => {

  const RED_COLORS = []
  const BLACK_COLORS = []

  //RESULT_IMAGE

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.google.com/');
 
  // await page.screenshot({
  //   path : './IMG/RESULT_IMAGE.PNG',
  //   clip: {
  //     x: 436,
  //     y: 543,
  //     width: 200,
  //     height: 200
  //   }
  // });

  
// sleep(3000)

//   await page.mouse.click(1024,469)

  

})();


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}