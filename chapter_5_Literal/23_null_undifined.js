// null vs undefined in JavaScript

// undefined
// - A variable that has been declared but not assigned a value
// - A function parameter that is not provided
// - A property that does not exist on an object
// - The default return value of a function with no return statement

let a;
console.log(a); // undefined

function example(x) {
    console.log(x); // undefined when called without an argument
}
example();

const obj = {};
console.log(obj.missingProp); // undefined

function noReturn() {
    const result = 1 + 1;
}
console.log(noReturn()); // undefined

// null
// - An explicit assignment by the programmer
// - Used to indicate "no value" or "empty value"
// - It is a valid object reference in JavaScript

let b = null;
console.log(b); // null

// Key differences:
// 1. Origin:
//    - undefined is typically created by the runtime when a value is missing.
//    - null is explicitly set by the developer.
// 2. Meaning:
//    - undefined means a variable has not been assigned a value.
//    - null means a value is intentionally empty.
// 3. Type:
//    - typeof undefined === 'undefined'
//    - typeof null === 'object' (this is a long-standing JavaScript quirk)

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"

// Comparison behavior:
console.log(undefined == null); // true  (loose equality)
console.log(undefined === null); // false (strict equality)

// Usage guidance:
// - Use undefined to indicate a missing value that has not been set.
// - Use null when you intentionally want to clear a value or represent "no object".
