// primitive 

// 7 types : string , number , boolean ,, null , undefined , symbol, bigint

// js is________ typed language 
const score = 100
const scorevalue  = 100.3

const islogedin = false 
const outsidetem = null


const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid ); // false 

// const bigNumber =  34573573465873465734653475634875634875634873687563n

//************************************************************************************************** */

// referance ( non premitive )
// array, objects , functions 

const heros = [ "shaktiman", "naagraj"]; // these are array

let myinfo = {
    name: "mudit",
    age:  20,

} // anything written in {} is object 

const myFunction = function(){
    console.log("hello world ");
} // function(){......} defination of function , we have stored it in variable known as myfunction 
// to check datatype of anyone use "typeof" function 
//### for typeof null it will give object rest all normal like typeof string will be string
console.log(typeof value );


//****************************************************************************************************************** */
// MEMORY CONCEPTS 
// 1 stack () [ copy of data ] 
// 2 heap () [ direct reference ]
// example of stack 

let myyoutubename = "abcdotcom"

let anotheryoutubename = myyoutubename
// lets change it 
anotheryoutubename = "chaiandcode"

console.log(myyoutubename) // this will give us abcdotcom it will not get changed 
console.log(anotheryoutubename)// this will give us chai and code 


// example of heap

let userOne = {
    email: "abc@google.com"
}

let usertwo = userOne

usertwo.email = "mudit@google.com"
console.log(userOne.email); // this will give us mudit@google.com because it is heap and both userone and usertwo are reference to same object in heap
console.log(usertwo.email); // this will give us mudit@google.com because it is heap and both userone and usertwo are reference to same object in heap

