// ["", "",""]
// [{},{},{}]

// for of loop
const numbers = [1,2,3,4,5]
for (const num of numbers) {
  //  console.log(num);
}

const names = ["harsh", "anshika","sneha","kishan","choti"]
for (const name of names) {
  //  console.log(name);
    
}

// Iterating in MAPS
const map = new Map()
map.set("IN","India")
map.set("INR","Rupee")
map.set("IND","Indonesia")
map.set("RMG","Ramgarh")

// It will return the array : [key,value]
for (const key of map) {
   // console.log(key);
}
// But we want key and value separately
for (const [key,value] of map) {
   // console.log(key, " :- ",value);
    
}

// Now iterating on objects 
const user = {
    name:"harsh",
    age:15,
    place:"bhopal"
}

// Both loops does not works 
// for (const obj of user) {
//     //console.log(obj)
// }
// for (const [key,value] of user) {
//    // console.log(key, " ", value)
// }

//FOR IN LOOP
// Iterating over objects 
const language = {
    "js":"javascript",
    "cpp":"C++",
    "rb":"Ruby",
    "py":"pyhton",
}

for (const key in language) {
   //console.log(key)// will print the keys of the object
 //  console.log(language[key]) // prints the value
}


// FOR EACH LOOP
const places =["agra","bhopal","jaipur","delhi","gurgaon"]
// WAY 1
places.forEach(function(item){
   // console.log(item)
})
// WAY 2
places.forEach((item)=>{
  //  console.log(item)
})

// WAY 3
function printMe(item){
   // console.log(item)
}
places.forEach(printMe)

places.forEach((item,index,arr)=>{
  //  console.log(item,index,arr)
})

const capitalState = [
    {
        State:"Madhya Pradesh",
        Capital:"Bhopal"
    },
    {
        State:"Jharkhand",
        Capital:"Ranchi"
    },
    {
        State:"Andhra Pradesh",
        Capital:"Visakhapatnam"
    }
]

capitalState.forEach((item)=>{
    console.log(`The Capital of ${item.State} is ${item.Capital}`)
})