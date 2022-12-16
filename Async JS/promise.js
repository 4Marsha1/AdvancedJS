// --------- WHAT? ---------

// Promise is simply an object in JS
// Promise is always is in one of the three states: 
// 1. Pending (NOT RESOLVED OR REJECTED)
// 2. Resolved (SUCCESS)
// 3. Rejected (FAILURE)

// --------- WHY? ---------
// PROMISES help us run code asynchronously, and makes it simpler than using callbacks
// CALLBACK HELL can be avoided with PROMISE

// --------- HOW? --------- 
const onFulfilled = (result) => {
    console.log(result);
}
const onRejected = (error) => {
    console.log(error);
}
const promise = new Promise((resolve, reject) => {
    // Changing state of the promise: 
    // resolve() ----> Changes states from 'pending' to 'resolved' -----> results in execution of then()
    // reject() ----> Changes states from 'pending' to 'rejected' -----> results in execution of catch()

    setTimeout(() => resolve('fulfilled'), 2000)
    // setTimeout(() => reject('rejected'), 2000)
})

// Attach callbacks using then & catch functions on Promise Object
promise.then((res) => onFulfilled(res))
promise.catch((err) => onRejected(err.message))

// .then & .catch can be chained
// promise.then(callback1).then(callback2).then(callback3).catch(error)
// THIS RESOLVES CALLBACK HELL 


// ------------------ PROMISE: STATIC METHODS --------------------
// 1. Promise.all()
const promise1 = Promise.resolve(3);
const promise2 = 100
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'wow');
})
Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// 2. Promise.allSettled()
// 3. Promise.race()
