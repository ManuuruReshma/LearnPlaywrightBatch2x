let p = new Promise(function (resolve, reject) {
    resolve(42);
});
p.then(function (value) {
    console.log("Answer:", value);
});
============================
let p = new Promise(function (resolve, reject) {
    reject("Something broke");
});

p.catch(function (error) {
    console.log("Caught:", error);
})
========================
let p = Promise.resolve(5);
p.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);
});

----------------

Promise.resolve("Start").then(function(val){
    console.log(val);
    throw new Error("Broke at step2");
}).then(function(){
    console.log("This will Not run");
}).catch(function (err){
    console.log("Caught:",err.message);
});
================
Promise.reject("Test failed").then(function(data){
    console.log("Data:", data);
}).catch(function(err){
    console.log("Error:",err);
}).finally(function(){
    console.log("Cleanup done");
});
===================

Promise.resolve("Quick win").then(function(msg){
    console.log(msg);
});

Promise.reject("Quick loss").catch(function(msg){
    console.log(msg);
})

=====================

let t1=Promise.resolve("Login:PASS");
let t2=Promise.resolve("search:PASS");
let t3=Promise.resolve("LogOut:PASS");

Promise.all([t1,t2,t3]).then (function(results){
    console.log(results);
});

=====================================

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function(results){
    results.forEach(function(r) {
        let val = r.status === "Fulfilled"? r.value : r.reason;
        console.log(r.status+"->"+val);
        console.log(r);
    });
});