var Tesseract = require('tesseract.js');

Tesseract.recognize(
    './2.jpeg',

  ).then(({ data: { text } }) => {
    console.log(text);
  })