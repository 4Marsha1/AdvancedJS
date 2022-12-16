// ---------------------- ASYNC KEYWORD --------------------
// Async Await keywords allow us to write synchronous looking code while performing asynchronous tasks behind the scenes
function greet(name) {
    return (`hello ${name}`);
}
console.log(greet('john'));

// ASYNC keyword is used to declare ASYNCHRONOUS FUNCTIONS
async function add2(num) {
    return num + 2;
}
// Unlike normal functions, ASYNC Functions always RETURN a PROMISE
console.log(add2(4))
// OR 
add2(6).then((res) => console.log(res)).catch((err) => console.log(err.message))

// ---------------------- AWAIT KEYWORD --------------------
// AWAIT keyword can be placed BEFORE any ASYNC PROMISE FUNCTION to PAUSE the code until the PROMISE SETTLES & RETURNS RESULT.
// AWAIT only works inside ASYNC FUNCTIONS
async function greetASYNCAWAIT(name) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`hello ${name}`), 5000)
    })
    const res = await promise;
    console.log(res);
}
greetASYNCAWAIT('John Wick')


// Async Await code can also be placed inside try-catch blocks

// ---------------------------- TYPES OF EXECUTIONS ----------------------------
function resolveHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`hello`), 2000)
    })
}
function resolveWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`world`), 1000)
    })
}

// ----------------------------------- 1. Sequential EXECUTION ----------------------------
async function Sequential() {
    const hello = await resolveHello()
    console.log(hello) // Logs after 2 secs
    const world = await resolveWorld()
    console.log(world); // Logs after 2+1= 3 secs
}
Sequential()

// ------------------------------------ 2. Concurrent EXECUTION ----------------------------
async function Concurrent() {
    const hello = resolveHello()
    const world = resolveWorld()
    console.log(await hello) // Logs after 2 secs
    console.log(await world); // Logs after 2 secs (Execution already done 1sec earlier but was waiting for 57 to log)
}
Concurrent()

// ------------------------------------ 3. Parallel EXECUTION ----------------------------
async function Parallel() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(), // Logs after 2 secs
        (async () => console.log(await resolveWorld()))()  // Logs after 1 sec
    ])
    console.log('finally') // Logs after 2 secs (end of all execution)
}
Parallel();