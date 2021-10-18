/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

/* BIG MAC: LIST OF PRICES*/
const BIG_MAC_US = 5.66;
const BIG_MAC_UK = 3.79;
const BIG_MAC_CH = 7.20;
const BIG_MAC_AT = 4.30;
const BIG_MAC_ARG = 490;
const BIG_MAC_UY = 259;

/* EXCHANGE RATES (VS. US DOLLAR) */
const POUND_RATE = 1.37;
const CHF_RATE = 1.08;
const EUR_RATE = 1.16;
const ARG_RATE = 0.010;
const UY_RATE = 0.023;

/* IMPLIED PURCHASING POWERS (IPP) */
const IPP_UK = BIG_MAC_US/BIG_MAC_UK; 
const IPP_CH = BIG_MAC_US/BIG_MAC_CH;
const IPP_AT = BIG_MAC_US/BIG_MAC_AT;
const IPP_ARG = BIG_MAC_US/BIG_MAC_ARG;
const IPP_UY = BIG_MAC_US/BIG_MAC_UY;

/* BIG MAC INDEXES */
let indexUS_UK = ((POUND_RATE - IPP_UK)/IPP_UK)*100;
let indexUS_CH = ((CHF_RATE - IPP_CH)/IPP_CH)*100;
let indexUS_AT = ((EUR_RATE - IPP_AT)/IPP_AT)*100;
let indexUS_ARG = ((ARG_RATE - IPP_ARG)/IPP_ARG)*100;
let indexUS_UY = ((UY_RATE - IPP_UY)/IPP_UY)*100;

/* FIRST PART OF THE EXERCISE */
console.log(indexUS_UK);  // -8.263250883392216
console.log(indexUS_CH);  // 37.385159010600724
console.log(indexUS_AT);  // -11.872791519434646
console.log(indexUS_ARG); // -13.427561837455832
console.log(indexUS_UY);  // 5.247349823321552

/* FIRST CHALLENGE */
/* COMPARISON OF INDEXES UK */
const UK_CH = indexUS_UK>indexUS_CH;
const UK_AT = indexUS_UK>indexUS_AT;
const UK_ARG = indexUS_UK>indexUS_ARG;
const UK_UY = indexUS_UK>indexUS_UY;
console.log(UK_CH); // false
console.log(UK_AT); // true
console.log(UK_ARG);  // true
console.log(UK_UY); // false

/* COMPARISON OF INDEXES CH */
const CH_UK = indexUS_CH>indexUS_UK;
const CH_AT = indexUS_CH>indexUS_AT;
const CH_ARG = indexUS_CH>indexUS_ARG;
const CH_UY = indexUS_CH>indexUS_UY;
console.log(CH_UK); // true
console.log(CH_AT); // true
console.log(CH_ARG);  // true
console.log(CH_UY); // true

/* COMPARISON OF INDEXES AT */
const AT_UK = indexUS_AT>indexUS_UK;
const AT_CH = indexUS_AT>indexUS_CH;
const AT_ARG = indexUS_AT>indexUS_ARG;
const AT_UY = indexUS_AT>indexUS_UY;
console.log(AT_UK); // false
console.log(AT_CH); // false
console.log(AT_ARG);  // true
console.log(AT_UY); // false

/* COMPARISON OF INDEXES ARG */
const ARG_UK = indexUS_ARG>indexUS_UK;
const ARG_CH = indexUS_ARG>indexUS_CH;
const ARG_AT = indexUS_ARG>indexUS_AT;
const ARG_UY = indexUS_ARG>indexUS_UY;
console.log(ARG_UK);  // false
console.log(ARG_CH);  // false
console.log(ARG_AT);  // false
console.log(ARG_UY);  //false

/* COMPARISON OF INDEXES UY */
const UY_UK = indexUS_UY>indexUS_UK;
const UY_CH = indexUS_UY>indexUS_CH;
const UY_AT = indexUS_UY>indexUS_AT;
const UY_ARG = indexUS_UY>indexUS_ARG;
console.log(UY_UK); // true
console.log(UY_CH); // false
console.log(UY_AT); // true
console.log(UY_ARG);  // true

/* SECOND CHALLENGE*/
/* DISPLAY OF INDEXES */
console.log("The Big Mac Index in the UK is: " + indexUS_UK.toFixed(2) + "%");
console.log("The Big Mac Index in Switzerland is: " + indexUS_CH.toFixed(2) + "%");
console.log("The Big Mac Index in Austria is: " + indexUS_AT.toFixed(2) + "%");
console.log("The Big Mac Index in Argentina is: " + indexUS_ARG.toFixed(2) + "%");
console.log("The Big Mac Index in the Uruguay is: " + indexUS_UY.toFixed(2) + "%");

/* COMPARISON OF INDEXES (ONLY UK)*/
if(UK_CH) {
  console.log("The Big Mac Index in the UK is higher than the one in Switzerland");
}
else {
  console.log("The Big Mac Index in the UK is lower than the one in Switzerland");
}
if(UK_AT) {
  console.log("The Big Mac Index in the UK is higher than the one in Austria");
}
else {
  console.log("The Big Mac Index in the UK is lower than the one in Austria");
}
if(UK_ARG) {
  console.log("The Big Mac Index in the UK is higher than the one in Argentina");
}
else {
  console.log("The Big Mac Index in the UK is lower than the one in Argentina");
}
if(UK_UY) {
  console.log("The Big Mac Index in the UK is higher than the one in Uruguay");
}
else {
  console.log("The Big Mac Index in the UK is lower than the one in Uruguay");
}