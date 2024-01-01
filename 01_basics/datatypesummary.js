/*const id =Symbol("123")
const anotherId =Symbol("123")

console.log(id===anotherId) //false

// const bigNumber=123456789n
console.log(typeof bigNumber)

/////Arrays , objects and functions (NON-PRIMITIVE)
//ARRAY
const heroes=["shaktiman", "naagraj", "doga"]; 
console.log(typeof heroes)

//object
let myObj={       
    name: "Ashu",
    Age :22,
}

//FUnction
const myFuction=function(){
    console.log("Hello World")
}*/

/********stacks and heaps**********/
/*stack
let myYoutubename="AshuGoel"
anothername=myYoutubename;
anothername="goelashu"
console.log(myYoutubename)
console.log(anothername)
*/

/*heap*/
let userOne={
    email:"ashugoel937@gmail.com"
}
userTwo=userOne
userTwo.email="hellloo@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)