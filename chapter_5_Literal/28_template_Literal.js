// Template Literals in JavaScript
// Template literals are string literals enclosed by backticks (` `) instead of single or double quotes.
// They provide several powerful features:
// 1. String interpolation using ${expression}
// 2. Multi-line strings without escape characters
// 3. Tagged templates for custom processing

// Basic template literal with interpolation:
const name = "Reshma";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Reshma!

// Template literals can include expressions inside ${ }:
const a = 5;
const b = 10;
const expressionResult = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(expressionResult); // The sum of 5 and 10 is 15.

// Multi-line strings are much easier with template literals:
const multiLine = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multiLine);

// Tag functions allow custom string processing:
function emphasize(strings, value) {
    return strings[0] + value.toUpperCase() + strings[1];
}

const tagged = emphasize`This is ${name}.`;
console.log(tagged); // This is RESHMA.

// Key differences from regular strings:
// - Use backticks (`) instead of single or double quotes.
// - You can interpolate variables and expressions inside ${ }.
// - Newlines are preserved automatically.
// - Useful for building dynamic strings, HTML templates, or formatted output.

// Example with embedded object property:
const user = { firstName: "Reshma", score: 98 };
const userInfo = `User ${user.firstName} scored ${user.score} points.`;
console.log(userInfo); // User Reshma scored 98 points.
