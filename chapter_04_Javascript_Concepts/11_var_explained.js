var V = 10;

// var is a function scoped variable, which means it is accessible within the function it is declared in, and also outside of it if declared in the global scope. It can be re-assigned and re-declared.

console.log(V); // Output: 10

function test() {
    var V = 20; // This V is different from the global V
    console.log(V); // Output: 20
    if (true) {
        var V = 30; // This V is the same as the one declared in the function scope, it will overwrite the previous V
        console.log(V); // Output: 30
    }
}

test();