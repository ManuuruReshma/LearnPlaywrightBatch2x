function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing");
})

//callback with parameter

function runTest(TestName, callback) {
    let statues = "PASS";
    callback(TestName, statues)
}
runTest("Login Test", function (name, result) {
    console.log(name + "->" + result);
});

//Sync CAllBack - for each
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ":" + bug);
});

console.log("Total bugs: " + bugs.length);