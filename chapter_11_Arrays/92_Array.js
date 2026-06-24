let tests = ["login", "checkout", "search"];
tests.sort();
console.log(tests);

let number = [1, 3, 2];
number.sort();
console.log(number);

let nums = [10, 1, 21, 2];
nums.sort((a, b) => (a - b)); //asc order
console.log(nums);
nums.sort((a, b) => (b - a)); //des order
console.log(nums);