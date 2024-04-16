// // https://www.geeksforgeeks.org/javascript-code-execution/

// let val1 = 10
// let val2 = 5
// function addNum(val1 , val2){
//     let total = val1 + val2;
//     return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(1,5)

// // Question : How does this code executes in javascript environment

// //Answer
// Execution Context: Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed.

// There are two execution context 
// 1.Global Execution Context
// 2.Functional Execution Context

// Now, an Execution Context has two components and JavaScript code gets executed in two phases.

// Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.
// Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context. 

// 1.Memory assigning phase
// val1->undefined
// val2->undefined
// addNum->function definition
// result1->undefined
// result2->undefined

// 2.Code Execution phase
// val1->10
// val2->5
// addNum -> A new stack is created .(again memory allocation phase and code execution phase will be in this stack.)


// 2.1 memory assigning to the functional stack variables
// val1->undefined
// val2->undefined
// total1->undefined

// 2.2 code execution phase
// val1->10 
// val2-> 5
// total-> 15
 
// The return statement will return the value of total 1 to the variable result1 in global execution context from where the function execution started. After returning this function stack will be deleted. 
