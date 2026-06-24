function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

let a = runTest("Login", "pass", 320);
console.log(a);