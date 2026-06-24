function print() {
    console.log("Normal Function");
}

function placeOrder(ClipboardItem, callback) {
    console.log("HI You order is placed");
    callback();
}

//first way
placeOrder("Burger", function () {
    console.log("Hi, how are you?");
})

//second way

function placeOrder(ClipboardItem, callback) {
    console.log("HI< You order is placed");
    callback();
}
placeOrder("Pizza", print)

//third way- ARROW
placeOrder("Burger", () => {
    console.log("anoy fn, i am  also a function without name!")
});
