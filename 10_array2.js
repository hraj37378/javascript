const heroes=["thor", "ironman ", "spiderman "]
const enemies = ["ravan ", "Batman" ,"flash"]

heroes.push(enemies)// [heroes,[enemies]]
// since arrays can store any type of values so the enemies array is completely pushed into heroes array.
// console.log(heroes);
// console.log(heroes[3][2]); // flash

 const newArrr = heroes.concat(enemies)//concat returns an array after joining two arrays 
// console.log(newArrr);

const newArr = [...heroes, ...enemies]// spread operator
//console.log(newArr);

const anotherArr = [1,2,3,[4,5,],6,[7,[8,9]]]
const usearr= anotherArr.flat(Infinity)
//console.log(usearr)

console.log(Array.isArray("Harsh"));//checks whether is array or not
console.log(Array.from("Harsh"));// splits name and makes array out of it
console.log(Array.from({name:"Harsh"})); // empty array

