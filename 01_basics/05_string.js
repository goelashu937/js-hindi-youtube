/*string and various types*/

/*
let firstName="Ashu"
let lastName=" Goel"
console.log(firstName+lastName+" Ji")
console.log(`My first name is ${firstName} and my last name is ${lastName}`)
*/
/*const myName=new String("Ashu-Goel")
console.log(myName[3])
console.log(myName.__proto__)
console.log(myName.charAt(5))
console.log(myName.blink())/*depriciated in js
console.log(myName.indexOf('s'))
console.log(myName.substring(0,5))

const newString= myName.slice(-8,4)
console.log(newString)
const oneString=myName.slice(2,4)
console.log(oneString)
*/
// const str1=("     my name is ashu    ")
// console.log(str1.trim())
const url="https://www.google%20.com//"
 console.log(url.replace('%20','-1'))//used when we want to replace something 
 console.log(url.includes(":"))//used when we want to check whether desired wode is present or not.
 let str2=new String("my-name-is-Ashu-Goel")
 console.log(str2.split('-'))
 //splits each word on basis of '-'
 

