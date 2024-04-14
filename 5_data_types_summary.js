// there are two data types based on how data is stored in memory and how is is extracted 

// PRIMITIVE : 
// 7 types : String , Number Boolean , null , undefined , Symbol , BigInt 

// REFERENCE or NON PRIMITIVE : memory me reference allocate kiya jata hai
// Array , Objects , Functions  
// **********************************
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// +++++++++++++++++++++++++++++++++
// Stack (Primitive)  Heap (Non Primitive )

let name1 = "Harsh Raj"
let name2 = name1
name2 = "Kishan Kumar"

console.log(name1);
console.log(name2);

// the change will be only in name2 variable . The concept here is that it is primitive data type and it is stored in stack ehich copies the value of name1 in name2 and not the refrence .

let userOne = {
    email:"hraj@gmail.com",
    gender : "male"
};

let userTwo = userOne;
userTwo.email = "kishan@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
// Objects are Non Primitive and stored in heap memory which stores the reference . So any change in any value will reflect in the original one too. 