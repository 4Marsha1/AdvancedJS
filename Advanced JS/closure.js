// when a function is created, a closure gets created. 
// when we return a function from another function, it not only returns the function but also the scopes which in turn
// lets us hold on to the live data between executions.
// allows us to access the variables even after the function is closed
// this combination of function definition & its scope chain is called closure. 

// Example: 
function nonClosureOuter() {
    let counter = 0;
    function nonClosureInner() {
        counter++;
        console.log(counter);
    }
    nonClosureInner();
}

// This outputs the same, as separate calls invoke 2 different instances of the outer function
nonClosureOuter();
nonClosureOuter();

function closureOuter() {
    let counter = 0;
    function closureInner() {
        counter++;
        console.log(counter);
    }
    return closureInner;
}

// This outputs different, as scope chain is being created. This is called closure
const fn = closureOuter();
fn();
fn();

// CLOSURE IS CREATED WHEN A FUNCTION IS RETURNED FROM ANOTHER FUNCTION
// when we return a function from another function, it not only returns the function but also the scopes

// WITH CLOSURES, the inner function has access to the variables in the outer function scope even after the outer function has executed completely