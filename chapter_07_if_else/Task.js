// 1. checking the status code

let input = 200;

if (200 < input < 300) {
    console.log("Success");
}
else if (300 < input < 400) {
    console.log("Redirect");
}
else if (400 < input < 500) {
    console.log("Client Error");
}
else if (500 < input < 600) {
    console.log("Server Error");
}
else {
    console.log("Invalid");
}



// 2.Test cases pass or fail

let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("Test Passed");
}
else {
    console.log("Test failed")
}


//3.Bug Severity classifier

let bug = 7;

if (bug >= 9) {
    console.log("Critical(block release)");
}
else if (bug >= 7) {
    console.log("HIGH");
}
else if (bug >= 4) {
    console.log("Medium");
}
else if (bug >= 1) {
    console.log("Low");
}
else {
    console.log("Invalid");
}

//4. Build health report

let report = 30;

if (report === 100) {
    console.log("Green Build");
}
else if (90 <= report < 100) {
    console.log("Stable");
}
else if (70 <= report < 90) {
    console.log("Unstable");
}
else {
    console.log("Broken Build(Block Deployment)");
}

// 5. login lockout after failed attempts

let attempt = 2;

if (attempt === 2) {
    console.log("1 attempt left brfore lockout");
}
else if (attempt === 3) {
    console.log("Account Locked - Contect support");
}
else if (attempt === 0) {
    console.log("Login Successful.")
}