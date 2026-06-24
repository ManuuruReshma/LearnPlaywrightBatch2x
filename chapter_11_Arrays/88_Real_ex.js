let classes = ["A", "B", "C", "D"];
console.log(classes.length);
console.log(classes);


classes.pop();
console.log(classes);

let removed = classes.shift();
console.log(classes)
console.log(removed);

let browser = ["A", "B", "C", "D"];


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i])
    if (browser[i] === "A") {
        console.log("A removed:");
    }

}
