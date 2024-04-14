// comparison happens and both return true because js converts string into integer for comparison 
console.log("2" > 1) 
console.log("02" > 1)

// equality check == and comparisons > <>= <= work differently. 
// comparisons convert null to a number treating it as 0 .That's why null >= 0 is true and null > 0 is false.

console.log(null > 0  );
console.log(null == 0 );
console.log(null >= 0 )

// all will result false
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0)

// === checks values and data types 
console.log("2" === 2) // false