// In JS, Functions are first class objects
// Because: 
// 1. Functions can be passed as arguments to other functions
// 2. Functions can be returned from other functions

function greet(name) {
    console.log(`Hello ${name}`);
}
function greetJohn(greetFN) {
    name = 'John';
    greetFN(name);
}
greetJohn(greet);

// Any function that is passed as an argument to another function is called a callback function in JS. 
// EXAMPLE: greet(name)

// Any function that accepts a function as an argument or returns a function is called a higher order function in JS. 
// EXAMPLE: greetJohn(func)

function higherOrderFunction(callback) {
    name = 'Wick'
    callback(name)
}
higherOrderFunction(greet)


// Callback functions are of 2 types: Synchronous and Asynchronous
// Synchronous: executes immediately, Asynchronous: executes after some time, or event occurred or some data is fetched

// To tackle the problem of Callback Hell, Promises were introduced

// USING PROMISED IS RECOMMENDED OVER CALLBACKS NOWADAYS