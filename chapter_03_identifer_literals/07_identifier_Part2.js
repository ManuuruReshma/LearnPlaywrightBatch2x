// 07_identifier_Part2.js
// Examples of identifier naming cases in JavaScript

// 1. camelCase: common for variables and functions
var firstName = "John";
var lastName = "Doe";
var userAge = 25;

function getUserName() {
  return firstName + " " + lastName;
}

// 2. PascalCase: used for classes and constructors
class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var currentUser = new UserProfile("Alice", 30);

// 3. snake_case: valid but less common in JavaScript
var user_name = "bob";
var user_age = 28;

// 4. SCREAMING_SNAKE_CASE: used for constants
const MAX_USERS = 100;
const API_KEY = "abc123";

// 5. kebab-case: not valid for JavaScript identifiers
// var user-name = "invalid"; // SyntaxError: Unexpected token '-'

// Usage examples
console.log(getUserName());
console.log(currentUser);
console.log(user_name, user_age);
console.log(MAX_USERS, API_KEY);
