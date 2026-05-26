//for

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

// of
for (i of tests) {
    console.log(i);
}

//foreach

tests.forEach((i, index) => {
    console.log(i, index);
});

//in

let num = ["a", "b"]

for (let nums in num) {
    console.log(nums, " ->", num[nums]);
}