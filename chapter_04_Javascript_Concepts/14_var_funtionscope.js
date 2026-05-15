var V = 10; // This V is in the global scope


console.log(V); // Output: 10

function test() {
    var V = 20; // This V is different from the global V
    console.log(V); // Output: 20
    if (true) {
        var V = 30; // This V is the same as the one declared in the function scope, it will overwrite the previous V
        console.log(V); // Output: 30
    }
    console.log(V);
}

test();
console.log(V);