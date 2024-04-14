const name = "Harsh"
const title = "Raj"

//Old way of writing 
// console.log(name + title + " Value")

//     NEW WAY 
console.log(`Hello My name is ${name} ${title} `)

const gameName =new String("Harsh Raj")
console.log(gameName[0]);
console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
console.log(gameName.toUpperCase()); 
// it will change the original value

// SUBSTRING
const newString = gameName.substring(0,4)
console.log(newString);
// SLICE
const anotherString = gameName.slice(-2,4)
console.log(newString);

// TRIM
const newStringOne = "     harsh    "
console.log(newStringOne.trim())

// REPLACE 
const url = "www.google.com/in/harshKdskl"
console.log(url.replace("google","harsh"))

// SPLIT : gives array 
const name1 = "harsh-jai-lom-ipsum-asdlk"
console.log(name1.split('-'))