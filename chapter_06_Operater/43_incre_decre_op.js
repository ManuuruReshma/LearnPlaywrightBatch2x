/* Increment and decrement operators in JavaScript
++ : increment (prefix and postfix)
-- : decrement (prefix and postfix) */

// Example usage:
let a = 5;
a++;
console.log(a); // Output: 6

let b = 5;
b--;
console.log(b); // Output: 4

// Prefix vs Postfix
let x = 5;
let y = ++x; // prefix: increment first, then assign
console.log(x, y); // Output: 6 6

let p = 5;
let q = p++; // postfix: assign first, then increment
console.log(p, q); // Output: 6 5
