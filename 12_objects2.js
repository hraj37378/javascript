// singleton or constructor object

const user = new Object()

user.id = "123"
user.name = "harsh"
user.email = "jjdf@gmail.com"
//console.log(user);

const regularUser = {
    email:"sone@gmail.com",
    fullname:{
        userFullname: {
            firstname:"harsh",
            lastname:"raj"
        }
    }
}
//console.log(regularUser.fullname?.userFullname.firstname);

// Combining two or more Object
const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {obj1, obj2 }
//console.log(obj3) , It will give object ke andar object just like array ke andar array 

const obj4 = Object.assign(obj1,obj2)//all the objects will be merged into obj1 

// but use the below syntax . it states combine obj1 and obj2 and the resultant output will be object guaranteed.

const obj5 = Object.assign({},obj1,obj2)
// console.log(obj5);

// by using object destructuring
const obj6 = {...obj1,...obj2}
// console.log(obj6); 

const userNew = [
    {
        id:1,
        name:"abc"
    },
    {
        id:2,
        name:"abc"
    },
    {
        id:3,
        name:"abc"
    },
]
userNew[1].name//abc

console.log(Object.keys(user));//creates an array of keys in user
console.log(Object.values(user));

