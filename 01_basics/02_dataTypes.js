"use strict"; // treat all JS code as newer version

//alert( 3 + 3) --- we cannot use this in nodejs, not browser

console.log(3+3);
console.log("subham");


console.log(typeof undefined);//undefined
console.log(typeof null);//object


// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.21

const Id = Symbol('123')
const AnotherId = Symbol('123')
console.log(Id === AnotherId);

const bigNumber = 6793764873743289748n


// Reference (Non Primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "nagagraj", "doga"];
let myobj = {
    name: "Subham",
    age: 21,
}

const myFun = function(){
    console.log("HEllo");
}