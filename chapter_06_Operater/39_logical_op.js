/* Logical operators in JavaScript
These are the logical operators:

&& : logical AND
|| : logical OR
!  : logical NOT
?? : nullish coalescing */

// Example usage:
let x = true;
let y = false;
console.log(x && y); // Output: false
console.log(x || y); // Output: true
console.log(!x);     // Output: false

let name = null;
let defaultName = "Guest";
console.log(name ?? defaultName); // Output: Guest
