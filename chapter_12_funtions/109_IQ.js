//Return a  value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

let a = getStatus(200);
console.log(a);

//______________

function logTest(name) {
    console.log(`Running : ${name}`);
    //no return
}
let result = logTest("Login");
console.log(result);

//_____________________

greet("Alice");

function greet(name) {
    return `Hello, ${name}!`;
}

//_____________________

sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
};