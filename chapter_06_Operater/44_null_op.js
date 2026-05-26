/* Null-related operators in JavaScript
?? : nullish coalescing operator
?. : optional chaining operator */

// Example usage:
let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // Output: Guest

let user = { profile: { age: 25 } };
console.log(user?.profile?.age);  // Output: 25
console.log(user?.address?.city); // Output: undefined (no error)
