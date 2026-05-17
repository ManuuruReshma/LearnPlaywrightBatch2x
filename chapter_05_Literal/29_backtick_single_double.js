// Differences between backtick, single-quoted, and double-quoted strings in JavaScript

const name = "Reshma";

// backtick allows interpolation and multiline strings
const backtickString = `Hello, ${name}!`;

// single and double quotes are equivalent for plain strings
const singleString = 'Hello, Reshma!';
const doubleString = "Hello, Reshma!";

console.log(backtickString);
console.log(singleString);
console.log(doubleString);

// Summary:
// - Backticks (`) support interpolation and multi-line text.
// - Single (') and double (") quotes are the same for ordinary strings.
// - Use backticks when you need ${expressions} or multiline strings.
