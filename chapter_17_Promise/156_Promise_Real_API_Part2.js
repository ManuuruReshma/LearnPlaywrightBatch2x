let apiCall = new Promise(function (resolve, reject) {
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Success or resolve");
}).catch(function (error) {
    console.log(error);
});