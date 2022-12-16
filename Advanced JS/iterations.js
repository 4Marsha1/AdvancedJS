let str = "John";
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// Iterables & Iterators --- Protocols
// Strings, Arrays, Maps & Sets have Iterables Protocol defined internally by JS

let name = ['w', 'i', 'c', 'k']
// ------------------ for...of Loop ------------------
for (const char of name) {
    console.log(char)
}

// Custom Data Structure with Iterables Protocol explicitly defined
const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return { value: 'Hello', done: false };
                } else if (step === 2) {
                    return { value: 'World', done: false };
                } else return { value: undefined, done: true };
            }
        }
        return iterator;
    }
}

for (const word of obj) {
    console.log(word);
}