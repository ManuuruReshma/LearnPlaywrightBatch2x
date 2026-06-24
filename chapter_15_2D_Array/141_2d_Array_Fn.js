let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];
let rowsums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowsums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

//I want all the test cases which have failed.
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]