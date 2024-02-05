const promiseOne = new Promise(function(resolve,reject){
     //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()

    },1000)   
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 Ready");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"kenil", email:"Kenil@savani.com"})
    },1000)
})
    promiseThree.then(function(user){
        console.log(user);
    })


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Kenil", password:123})
        }else{
            reject('ERROR : Somthing went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username;

}).then(function(username){
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("The Promise Either resolved or Rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function comsumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    } 

comsumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error);})