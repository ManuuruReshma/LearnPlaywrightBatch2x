const great = function (name) {
    return `hello, ${name}`;
}

let r = great("Pramod");
console.log(r);

//Type 4 normal fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}

//Function as Expression
const great2 = function (name1) {
    return `Hello,${name1}!`;
}

console.log(greet1("jai"));
console.log(great2("rama"));

