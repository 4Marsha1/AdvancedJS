// GENERATORS:
// Special Class of functions that simplify the task of writing iterators

// --------- NORMAL FUNCTIONS -------------------------------
function normalFunc() {
    console.log('hello');
    console.log('world');
}
normalFunc();
// --> Normal Functions cant stop midway, without returning or throwing an error

// --------- GENERATOR FUNCTIONS ----------------------------
// -----> Simplified way of writing custom iterable object
function* generatorFunc() {
    yield 'Hello';
    yield 'World';
}
// --> Generator Functions can stop midway. 
// --> Generator Functions return an iteratable object
const generatorObject = generatorFunc();
for (const word of generatorObject) {
    console.log(word)
}