function cafe(item, callWhenTableisReady) {
    console.log("Finding a table 1");
    console.log("Finding a table 2");
    console.log("Finding a table 3");
    console.log(item);
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("calling 1");
}

cafe("Burger", callWhenTableisReady);

cafe("Pizza", function () {
    console.log("Calling 2");
})

cafe("Momos", () => {
    console.log("Calling 3");
})