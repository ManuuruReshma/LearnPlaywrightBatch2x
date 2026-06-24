const user = {
    name: "reshma",
    age: 43
}

const calculator = {
    value: 0,
    add(a, b) {
        console.log(a + b);
    },
    subtract(c, d) {
        console.log(c - d);
    }
}

calculator.add(1, 2);
calculator.subtract(4, 2);