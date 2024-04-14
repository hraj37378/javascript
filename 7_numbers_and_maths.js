 const score = 400
 console.log(score);

 // here balance is explicitly defined as Number dataype
 const balance = new Number(100)
 console.log(balance)
 console.log(balance.toString().length)
 // decimal places after integer
 console.log(balance.toFixed(2))

// MATH LIBRARY
console.log(Math.random())
console.log((Math.random()*10) + 1 )
console.log(Math.floor((Math.random()*10) + 1 ));

const min= 10
const max= 20

// this will give value between 10 and 20 
console.log(Math.floor(Math.random() * (max-min+1)) + min)
