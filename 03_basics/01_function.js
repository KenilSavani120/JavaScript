
function muName(){
    console.log("K");
    console.log("E");
    console.log("N");
    console.log("I");
    console.log("L");
}

// muName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
// }

// const sum = addTwoNumbers(5,7);
// console.log("sum =" ,sum);

function addTwoNumbers(number1 , number2){
    // let sum = number1+number2
    // return sum
    return number1+number2
}


// const sum = addTwoNumbers(5,7);
// console.log("sum =" ,sum); // After write return you mst wrt colsol for printing 


function loginUserMessage(username){
    if(!username){
        console.log("Plz enter username");
        return
    }
    return `${username} is Just logged in`
}

// loginUserMessage("Kenil")
// console.log(loginUserMessage());




function calculateCartPrice(...num){  // spread Operator for add multiple values
    return num
}
// console.log(calculateCartPrice(100,200,200));


const user = {
    username: "Kenil",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
