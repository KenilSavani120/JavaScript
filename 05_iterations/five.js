const codingLanguage =["cpp","python","js","ruby"]

// codingLanguage.forEach( function (num){
//     console.log(num);
// }
// )

// codingLanguage.forEach( (num) => {
//     console.log(num);
// })

function printeMe(item) {
    console.log(item);
}

codingLanguage.forEach(printeMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )