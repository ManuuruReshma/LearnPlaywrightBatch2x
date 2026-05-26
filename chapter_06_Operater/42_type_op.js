/* Type operators in JavaScript
typeof : returns the type of a value
instanceof : checks if an object is an instance of a class */

// Example usage:
console.log(typeof 42);            // Output: number
console.log(typeof "Hello");       // Output: string
console.log(typeof true);          // Output: boolean
console.log(typeof undefined);     // Output: undefined
console.log(typeof null);          // Output: object (known quirk)
console.log(typeof {});            // Output: object
console.log(typeof []);            // Output: object
console.log(typeof function(){});  // Output: function

let date = new Date();
console.log(date instanceof Date); // Output: true
console.log(date instanceof Object); // Output: true
console.log(date instanceof Array);  // Output: false
