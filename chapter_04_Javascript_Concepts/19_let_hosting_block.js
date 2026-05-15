//let block-spaced variable, it is not hoisted to the top of its scope like var variables. Therefore, when we try to log 'greeting' before its declaration, it will throw a ReferenceError instead of outputting 'undefined'.

let x = 'global scope';
if (true) {
    //TDZ start fro here


    let x = 'block scope';
    console.log(x); // Output: block scope
}
console.log(x); // Output: global scope

