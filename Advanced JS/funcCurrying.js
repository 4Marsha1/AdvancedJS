// FUNCTION CURRYING: 
// transform a function that takes multiple arguments into a sequence of nested functions that take one argument at a time. 

// F(a,b,c) --> F(a)(b)(c)

function sum(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5));

// CURRYING is used to build reusable functions, where we get to chose the level of nesting
// CURRYING makes composing new functions easy