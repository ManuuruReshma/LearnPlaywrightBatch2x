// let is block scope and var is function scope
let L = 20;

// let is a block scoped variable, which means it is only accessible within the block it is declared

console.log(L); // Output: 20

let recount = 0;
recount = recount + 1;
recount = recount + 1;

console.log(recount);
//let recount = 10;// redeclaring is not possible with let, it will throw an error

teststatment = true

if (teststatment === true) {
    let L = 30;
    console.log(L); // Output: 30
}
console.log(L); // Output: 20, because the L inside the if block is a different variable than the L outside the block, they are not related to each other.