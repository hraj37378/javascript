// rest operator 
// it is similar to spread operator 
function calculatecartValue(num1){
    return num1;
}
//console.log(calculatecartValue(5));

// Now if we want to add many values then we can do this by using spread operator

function cartValue(...num1){
    return num1;
}
//console.log(cartValue(100,200,300,400,500))
// it will give an array of all these values and then loop through the array and add values

function cartValue1(val1,val2,...num)
{
    return num
}
//console.log(cartValue1(100,200,300,400,500))
// values from 300 will be added to the array 

// ARROW FUNCTIONS AND THIS KEYWORD
// this keyword refers to the current context 
// this gives different output in browser console and nodejs environment 

// console.log(this) 
function Code()
{
    let username="jars"
    console.log(this.username) // undefined
}
// Code()
// this does not work inside a function . only object ke andr this kaam krta hai 

const One = function one()
{
    console.log(this)
}
//One()
// Normal function ke andar this keyword alag value deta hai 
const two = ()=>{
    let username = "harsh"
    console.log(this.username)// undefined
    console.log(this) // {} empty object
}
//two()

// IIFE -> Immediately Invoked function Expressions 

(function chai(){
    // named IIFE because function has name "chai"
    console.log(`DB Connected`);
})();

// semi colon is necessary to end the function otherwise the next IIFE if written will not work 

( () =>{
    console.log(`DB Connected`);
})();

( (name) =>{
    console.log(`DB Connected ${name}`);
})('harsh');