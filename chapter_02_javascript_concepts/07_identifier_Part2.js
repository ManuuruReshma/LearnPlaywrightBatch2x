// JavaScript Identifier Naming Conventions - Part 2
// Different types of cases for naming variables and functions

// 1. camelCase (most common in JavaScript)
// - First word lowercase, subsequent words capitalized
// - Used for variables, functions, methods

var firstName = "John";
var lastName = "Doe";
var userAge = 25;
var isLoggedIn = true;

function getUserInfo() {
    return firstName + " " + lastName;
}

function calculateTotalPrice() {
    return 100 + 50;
}

// 2. PascalCase (or UpperCamelCase)
// - All words capitalized
// - Used for class names, constructor functions

function UserProfile(name, age) {
    this.name = name;
    this.age = age;
}

class ProductItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// 3. snake_case
// - All lowercase with underscores between words
// - Less common in JS, but used in some contexts (e.g., constants, Python-style)

var user_name = "Alice";
var user_age = 30;
var is_logged_in = false;

const MAX_USERS = 100; // Often in UPPER_SNAKE_CASE for constants
const API_KEY = "abc123";

// 4. kebab-case
// - All lowercase with hyphens
// - NOT valid for JavaScript identifiers (cannot use hyphens)
// - Used in CSS classes, HTML attributes, file names

// Invalid in JS:
// var user-name = "invalid"; // SyntaxError: Unexpected token '-'

// But used in other contexts:
// CSS: .user-name { color: blue; }
// HTML: <div data-user-name="value"></div>

// 5. SCREAMING_SNAKE_CASE
// - All uppercase with underscores
// - Used for constants that shouldn't change

const PI_VALUE = 3.14159;
const DATABASE_URL = "localhost:3000";
const ENABLE_DEBUG = true;

// Examples of mixed usage
var userProfile = new UserProfile("Bob", 28); // camelCase variable, PascalCase class
var total_price = calculateTotalPrice(); // snake_case variable, camelCase function