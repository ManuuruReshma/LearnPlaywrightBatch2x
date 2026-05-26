// Advanced increment/decrement in expressions

// Nested increments in function arguments
function show(n) {
  console.log("Received:", n);
}

let a = 1;
show(a++);               // Received: 1 (a becomes 2)
show(++a);               // Received: 3 (a becomes 3 then passed)

// Mixing pre/post with arithmetic operators
let x = 2;
let y = x++ * ++x - x--;
// Step-by-step:
// x++ returns 2, x becomes 3
// ++x increments x to 4, returns 4
// x-- returns 4, x becomes 3
// 2 * 4 - 4 = 4
console.log(y); // 4
console.log(x); // 3

// Increment/decrement in array indexing
let arr = [10, 20, 30, 40];
let idx = 0;
console.log(arr[idx++]);  // 10 (idx becomes 1)
console.log(arr[++idx]);  // 30 (idx becomes 2, then access arr[2])
console.log(arr[--idx]);  // 20 (idx becomes 1, then access arr[1])

// Post-decrement in while loop
let n = 5;
while (n--) {
  // runs for n = 4,3,2,1,0 (5 iterations)
  // n-- returns current n (truthy first 5 times)
  // loop stops when n-- returns 0 (n becomes -1)
}
console.log(n); // -1
