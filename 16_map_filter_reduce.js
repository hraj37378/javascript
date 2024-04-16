const myNums = [1,2,3,4,5,6,7,8,9,10]

// FILTER 

// without braces it will automatically return 
const newNums1 = myNums.filter( (num)=> num>4  )
// using parenthesis also it will automatically return 
const newNums2 = myNums.filter( (num)=> (num>4)  )
// but if you are using braces you have to return explicitly
const newNums3 = myNums.filter( (num)=> {return num>4})

// MAP 
const newNums4 = myNums.map((num)=>{return num+10})
// this is called as chaining 
const newNums = myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>45)

console.log(newNums)
//reduce read article 