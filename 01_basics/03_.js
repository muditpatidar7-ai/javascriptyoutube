// conversion operation in javascript<<number conversion, string conversion, boolean conversion>>
//console.log(typeof score);
//console.log(typeof (score));// can also e written as this 
/*
let score = 33
let newscore = String(score)
console.log(typeof newscore);
//if i give score a string value then
score = "33"
console.log(typeof score);
let newscore2 = Number(score)
console.log(newscore2);
console.log(typeof newscore2);
// if i give score a boolean value then
score = true
console.log(typeof score);
let newscore3 = Number(score)
console.log(typeof newscore3);
console.log(newscore3); // this will give us 1 because true is converted to 1 in number conversion
// if i give score a string value which is not a number then
score = "mudit"
console.log(typeof score);
let newscore4 = Number(score)
console.log(typeof newscore4); // this will give us NaN (Not a Number) because "mudit" cannot be converted to a number
console.log(newscore4); // this will give us NaN (Not a Number) because "mudit" cannot be converted to a number
// <<bollean conversion>>
// true is converted to 1 and false is converted to 0 in boolean conversion
score = 1
console.log(typeof score);
let newscore5 = Boolean(score)
console.log(typeof newscore5);
console.log(newscore5); // this will give us true because 1 is converted to true in boolean conversion
score = 0
let newscore6 = Boolean(score)
console.log(typeof newscore6);
console.log(newscore6); // this will give us false because 0 is converted to false in boolean conversion
score = "mudit"
let newscore7 = Boolean(score)
console.log(typeof newscore7);
console.log(newscore7); // this will give us true because any non-empty string is converted to true in boolean conversion
score = ""
let newscore8 = Boolean(score)
console.log(typeof newscore8);
console.log(newscore8); // this will give us false because an empty string is converted to false in boolean conversion
//<<string conversion>>
score = 33
let newscore9 = String(score)
console.log(typeof newscore9);
console.log(newscore9); // this will give us "33" because 33 is converted to "33" in string conversion
score = true
let newscore10 = String(score)
console.log(typeof newscore10);
console.log(newscore10); // this will give us "true" because true is converted to "true" in string conversion
score = null
let newscore11 = String(score)
console.log(typeof newscore11);
console.log(newscore11); // this will give us "null" because null is converted to "null" in string conversion
score = undefined
let newscore12 = String(score)
console.log(typeof newscore12);
console.log(newscore12); // this will give us "undefined" because undefined is converted to "undefined" in string conversion
*/


//************************************operations******************************************************************
/*
let value = 3 
let negvalue = -value
console.log(negvalue); // this will give us -3 because we have negated the value of 3
console.log(2+2);
*/


/*
let str1 = "hello"
let str2 = "mudit"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2);// 12
console.log(1+2); // 3
console.log(1+"2");//12
console.log("1"+2+2); // this will give 122
console.log(1+2+"2");// this will give 32
*/

console.log(+true);
console.log(+"");

let num1 , num2 , num3 
num1= num2 = num3= 2+2 // do not write  this kind of code 


let gamecounter = 100
gamecounter++// postfix operator 
++gamecounter// prefix operator 

console.log(gamecounter);