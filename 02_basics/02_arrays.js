const marvel_heros = ["ironman","hulk","thor"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] 
// // that is called spred method , In that you should remember glass examlpe
// console.log(all_new_heros);

const anotherArr = [2,2,2,[4,5,6],5,7,[5,5,[7,8,]]]
const real_anotherArr = anotherArr.flat(Infinity) 
console.log(real_anotherArr);

console.log(Array.isArray("Kenil"));
console.log(Array.from("Kenil"));
console.log(Array.from({name:"Kenil"})); //Intresting Case 


let value1 = 100
let value2=200
let value3=300
console.log(Array.of(value1,value2,value3));