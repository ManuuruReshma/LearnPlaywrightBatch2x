//Higher-1order Functions
//A function that takes a function as argument or returns a function

function runwithlogin(testfn, testname) {
    let result = testfn();
    return result;
}

function logintest() {
    return "pass";
}

function logintestfailed() {
    return "Fail";
}

runwithlogin(logintest, "Login Test");
runwithlogin(logintestfailed, "Dashbord Failed Test");
