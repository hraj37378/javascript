// javascript arrays are resizable and can contain mix of data types
// arrays share same reference in memory so any changes will reflect in original one.

// ways of declaring array
const myArr1= [0 ,1 , 2 , 3 , 4]
const myArr2 = ["Harsh", "kishan", "Raj"]
const myArr3 = new Array(1,2,3,4);

// Array methods
myArr1.push(6)
myArr1.pop() // deletes the last element
myArr1.unshift(9) // add 9 in the first position in array
myArr1.shift() // deletes first element 
myArr1.includes(9) // return bool value and checks whether 9 is present in the array
// console.log(myArr1);

// join method will bind all the values of array seperated by comma and its type will be string 
const newArr = myArr1.join()
// console.log(newArr);

// SLICE vs SPLICE
console.log("A ", myArr1)
const myn1 = myArr1.slice(1,3) // start from index 1 exclude 3rd index and returns an array 
console.log(myn1);
console.log("B ", myArr1)

const myn2 = myArr1.splice(1,3)
console.log("C ",myArr1);
console.log(myn2);
// SLICE doesn't changes the original array whereas SPLICE changes the original array  and SPLICE includes bpth range .