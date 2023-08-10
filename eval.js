const Puppeteer = require('puppeteer');

(async () => {
  const browser = await Puppeteer.launch({
    headless: false,
    defaultViewport: false,
    args: [
        '--window-size=1920,1080',
      ],
});
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');

  const header = await page.$x('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]')
  console.log(await header[0].boundingBox())

  console.log(await header[0].clickablePoint())

//   await header[0].click()
//   console.log(header[0].asElement())
//    const {top, left, bottom, right} = header[0].getBoundingClientRect();
//   const rect = await page.evaluate((header) => {
//     const {top, left, bottom, right} = header.getBoundingClientRect();
//     return {top, left, bottom, right};
//   }, header);
//   console.log(rect);

  await browser.close();
})();


function getPosition( element ) {
    var rect = element.getBoundingClientR();
    return {
        x: rect.left,
        y: rect.top
    };
}