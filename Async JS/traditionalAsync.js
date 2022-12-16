// TRADITIONAL METHODS FOR ASYNCHRONOUS JS:
// setInterval() setTimeout()

function greet(name) {
    console.log(`Hello ${name}`);
}
// ------ 1. SetTimeout -------------
// setTimeout(function, duration, param1, param2, ....)
const timeout = setTimeout(greet, 2000, 'John Wick');
// clearTimeout(timeout);  -----> Good practice to clear timeout when the component unmounts


// ------ 2. SetInterval -------------
// setInterval(function, duration, param1, param2, ....)
const interval = setInterval(greet, 1000, 'Bruce Wayne');
// clearInterval(interval);  -----> Good practice to clear interval when the component unmounts


// It is possible to achieve setInterval with recursive setTimeout
// Recursive setTimeout is better than setInterval
const recursiveTimer = setTimeout(function run() {
    console.log('Running recursive setTimeout');
    setTimeout(run, 1000)
}, 1000)



// CLEARING UP ----------------
const timer = setTimeout(() => {
    clearInterval(interval)
    // line 32 does not work, since all instances are not cleared
    clearTimeout(recursiveTimer)
}, 5000)
// clearTimeout(timer);