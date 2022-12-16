// Determine this based on : (FOLLOWED IN THIS ORDER OF PREFERENCE)
// 1. New Binding
// 2. Explicit Binding
// 3. Implicit Binding
// 4. Default Binding


// ------- Implicit Binding -------
// when a function is invoked with a dot notation, `this` keyword references the object to the left of the dot notation
const person = {
    name: 'John',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName();


// ------- Explicit Binding -------
// when a function is invoked by passing the reference to an object, `this` keyword references the object to which the function is contextual
const address = {
    city: 'Guwahati',
    locality: 'kahilipara'
}
function sayMyCity() {
    console.log(`My city is ${this.city}`);
}
// Every function has the call method. `Call` is used to specify the context(reference) of an object to the function
sayMyCity.call(address);


// ------- New Binding -------
// Used with Constructor functions. When new is called, it creates an empty 'this' object to which properties can be then added
// ---> Constructor function
function Person(name) {
    // this = {} -----------------> the new keyword internally does this
    this.name = name;
}
// ---> Creating instances
const p1 = new Person('John')
const p2 = new Person('Mike')

// ------- Default Binding -------
// If none of the above bindings are satisfied, then JS falls back to the global scope, and set 'this' to the global object
sayMyCity();
const city = 'default binding example'
sayMyCity();