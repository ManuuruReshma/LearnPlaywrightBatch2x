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

openBrowser().then(function (mdg) {
    console.log("Step 1", msg);
    return goToLogin();
}).then(function (msg) {
    console.log("Step 2", msg);
    return entercreadentails();
}).then(function (msg) {
    console.log("Step 3", msg);
    return clickLogin();
}).catch(function (error) {
    console.log("error", error);
}).finally(function () {
    console.log("Done");
})