// Dates 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023 , 0 , 23)//month starts from 0 -> Jan
console.log(myCreatedDate.toDateString());


// creating dates in yy-mm-dd syntax
// 01 means january , when single charater was used then 0-> jan but when two char are used then 00 != Jan ,01 =>Jan
myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // gives time in milliseconds 
console.log(myCreatedDate.getTime());// changes the myCreatedDate into milliseconds
console.log(Math.floor(Date.now()/1000));// converting into seconds 
 
let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay());

