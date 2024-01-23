const user={
    username : "Kenil",
    price :  333,

    welcomeMassage:function(){
        console.log(`${this.username}, Welcome to the my website`);
        console.log(this);
    }

}
// user.welcomeMassage();
// user.username = "Nimesh"
// user.welcomeMassage();

// function shiv(){
//     let username = "shivay";
//     console.log(this.username);
// }

// const shiv = function shiv(){
//     let username = "shivay";
//     console.log(this.username);
// }

// const shiv = () => {
//     let username = "shivay"
//     console.log(this.username);
// }
// shiv()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(5,8));

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()