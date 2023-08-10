// (A) LOAD SHARP
const sharp = require("sharp");
 

const START_BUTTON = {
  'X':1059,
  'Y':683
}
const RED_BET = {
  'X':1010,
  'Y':353
}
const SHIP = {
  'X':710,
  'Y':283
}

const RESULT_IMAGE = {
  'X':576,
  'Y':126
}
// (B) OPEN IMAGE FILE
sharp("./IMG/RESULT_IMAGE.PNG")
 
// (C) EXTRACT FROM SPECIFIED COORDINATES
.extract({
  left: RED_BET.X, top: RED_BET.Y,  // X , Y
  width: 100, height: 100
})
 
// (D) SAVE TO FILE
.toFile("./RED_BET.PNG")

// (E) OPTIONAL - ON OK & HANDLE ERRORS
.then(info => console.log(info))
.catch(err => console.log(err));