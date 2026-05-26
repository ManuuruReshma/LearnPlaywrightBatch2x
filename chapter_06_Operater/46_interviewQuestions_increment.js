// Common interview questions on increment operators

// Q1: What is the output?
let i = 0;
console.log(i++ + ++i); // 0 + 2 = 2
// i starts 0, i++ returns 0, i becomes 1
// ++i increments i to 2, returns 2

// Q2: What is the value of i after each step?
let j = 1;
j = j++ + ++j;
// j = 1 + 3 = 4
// Step-by-step:
// j++ returns 1, j becomes 2
// ++j increments j to 3, returns 3
// 1 + 3 = 4, assigned to j

console.log(j); // 4

// Q3: Post-increment in loops
for (let k = 0; k < 3; k++) {
  console.log(k); // 0, 1, 2
}

// Q4: Multiple increments on same variable (undefined behavior avoided)
let m = 5;
m = m++ + m++ + ++m;
// m++ returns 5, m becomes 6
// m++ returns 6, m becomes 7
// ++m increments m to 8, returns 8
// 5 + 6 + 8 = 19
console.log(m); // 19
