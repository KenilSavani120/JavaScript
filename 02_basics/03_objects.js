// singleton
// Object.create

//objects literals

const mySum = Symbol("key1")

const JsUser = {
    name : "Kenil", "Fullname":"Nimesh",
    age : 18,
    [mySum]:"Mysum1",    
    location : "Ahmedabad",
    email:"kenil@savani.com",
    isLoggedIn : true,
    lastLoggedInDays: ["Monday","sunday"]

}

// console.log(JsUser.email);
//  // Upper method not working while you using Multiple value like "You are entring Maultiple names"
// console.log(JsUser["email"]);  // Method Name = Squre notation
// console.log(JsUser["Fullname"]);
// console.log(JsUser[mySum]);

JsUser.email = "kenil@chatgpt.com"
// Object.freeze(JsUser)  // Use for freeze the vlaue
JsUser.email = "kenil@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Expert");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js Expert ,${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());