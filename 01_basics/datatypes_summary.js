//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber= 2146541684643423432n

// Reference (Non primitive)

// Array, Objects, Functions
const heros=["shaktiman","doga","naagraj"]
console.log(heros);

let myObj ={
    name:"kenil",
    age:"18",

}

const myFUnction = function(){
    console.log("Hello World");
}

console.log(typeof myObj);