function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Open the Browser");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentails() {
    return new Promise(function (resolve) {
        resolve("Login page Loaded");
    });
}

function clicklogin() {
    return new Promise(function (reslove) {
        resolve("loggined successfully");
    })
}




async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1:", msg1);
    let msg2 = await goToLogin();
    console.log("Step 2:", msg2);
}

runTheE2E();