// A Promise contains both the producing code and calls to the consuming code.

//  "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Database Call, cryptography . network calls

  setTimeout(() => {
    //console.log("Async Task is Completed ");
    resolve();
  }, 100);
});

// PROMISE MUST BE CONSUMED AFter Writting it. Promise is an object only.
promiseOne.then(function () {
  //console.log("Promise consumed ")
});

// promise can be written directly without calling resolve method
new Promise(function (resolve, reject) {
  setTimeout(function () {
   // console.log("Async Task 2");
  }, 200);
}).then(function () {
 // console.log("Promise Consumed 2");
});

// Creating promise 3 and passing parameters in resolve method
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "owl", email: "owl@owl.org" });
  }, 1000);
});

promiseThree.then(function (user) {
 // console.log(user);
});

// Promise 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "kaipoche", password: "sushant" });
    } else {
        reject('Something went wrong')
    }
  }, 1000);
});

promiseFour
  .then((user) => {
   // console.log(user);
    return user.username;
  })
  .then((username) => {
    //console.log(username);
  })
  .catch(function (error) {
   // console.log(`Error : ${error}`);
  }).finally(()=>  console.log("The promise is either resolved or rejected"))


// PROMISE 5
const promiseFive = new Promise (function (resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"jaky",email:"jaky@gmail.com"})
        }else{
            reject('Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive //.then() se value aa rha promisefive me 
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

