let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;
    if (apiCall) {
        resolve({ "stataus": "Done" });
    } else {
        reject("Assertion Failed");
    }
});

testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Iwill be executed anyhow");
})