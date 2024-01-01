/*// const str1=400
const str2=new Number(100.4578)

// console.log(str1)//400
// console.log(str2)//[Number: 100]=output
// str3=str2.toString()//converted into string
// console.log(str3)//100
// console.log(typeof(str3))//string
console.log(str2.toString().length)//3
console.log(str2.toFixed(2))//100.46
const str4=123.8966
console.log(str4.toPrecision(3))
console.log(str4.toPrecision(4))
console.log(str4.toPrecision(5))
console.log(str4.toPrecision(1))

/*IMP example from mdn docs 
num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'
*/
/*
const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In'))
*/

/*+++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++*/

/*console.log(Math)//Object [Math] {}
console.log(Math.abs(4.45))//4.45 gives exact value
console.log(Math.round(4.3))//4
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.2))//4
console.log(Math.min(4,23,3,5,6,))//4
console.log(Math.max(4,3,24,53,13))//53*/

// console.log(Math.random())//values remain bw 0-1(prints any random value b/w 0-1)
// console.log((Math.random()*10)+1)//preferably used as we not require 0 output
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min)

// 