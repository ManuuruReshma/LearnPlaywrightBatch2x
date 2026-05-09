// Valid Identifiers (start with letter, _, or $; contain letters, digits, _, $; not reserved words)

// Valid: starts with letter
var name = "John";

// Valid: starts with underscore
var _val = 50;

// Valid: starts with dollar sign
var $val = 30;

// Valid: contains digits after first character
var val = 20;
var user1 = "Alice";

// Valid: case sensitive
var Name = "Jane";

// Invalid Identifiers (cannot start with digit, contain special chars, or be reserved words)

// Invalid: starts with digit
// var 1user = "invalid"; // Error: identifier cannot start with number

// Invalid: contains special character
// var user@name = "invalid"; // Error: @ not allowed 

// Invalid: reserved word
// var var = "invalid"; // Error: 'var' is reserved

// Invalid: contains space
// var user name = "invalid"; // Error: spaces not allowed

// Invalid: starts with hyphen
// var -user = "invalid"; // Error: cannot start with -

// Valid: camelCase convention
var firstName = "Bob";

// Valid: underscore for private
var _privateVar = 100;

// Valid: dollar for jQuery
var $element = document.getElementById("id");


