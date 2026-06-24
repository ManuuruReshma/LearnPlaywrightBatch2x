//Arrow Function (ES6)

const greet = function (name1) {
    return "hi" + name1;
}

let r = greet("Pramod");
console.log(r);

const greet2 = (name1) => "Hi" + name1;
let r2 = greet2("Teja");
console.log(r2);

___________________________________________

const doubleit = n => n * 2;
console.log(doubleit(10));

const printit = name => console.log(name);
printit("Dutta");

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => "Hi";

const great = name => {
    const message = 'Hi' + name;
    return message;
}
