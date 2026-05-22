const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number:", (input) => {
    let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + "is even");
    } else {
        console.log(num + "is odd");
    }
    r1.close();
});