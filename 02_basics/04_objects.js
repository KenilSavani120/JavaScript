const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Saama"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regulerUser = {
    email:"raama@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kenil",
            Lastname:"Savani"
        }
    }
}

// console.log(regulerUser.fullname.userfullname.Lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2} // Spred opreter
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const item={
    itemName:"Key",
    price: 35,
    itemOwner:"Kenil",
}

const {itemOwner:owner} = item
console.log(owner); 

// {
//     "name": "Kenil",
//     "coursename": "js in hindi",
//     "price": "free"
// }