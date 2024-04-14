// constructor ke through object banega to singleton object banega 

// singleton
// Object.create

// Object literals
const mySymbol = Symbol("key1")
const JsUser = {
    name:"Harsh", // it should be like "name": "harsh" but nowadays we don't do that. but internally javascript considers name as "name" string key only.
    age:18,
    [mySymbol]:"myKey1",// when symbol is used elclose it in square bracket
    "fullname":"Harsh Raj",
    location :"bhopal",
    email:"hraj@gmail.com",
    isLoggedIn:true
}

// accessing objects
console.log(JsUser.email) //hraj@gmail.com
console.log(JsUser["email"])//
console.log(JsUser.fullname); // Harsh Raj
console.log(JsUser["fullname"]);// same 
console.log(typeof JsUser[mySymbol]); 

// Read about symbol here may be wrong 
JsUser.email = "harsh@gmail.com"
Object.freeze(JsUser)// it will freeze the object means any changes to this object will not be reflected

