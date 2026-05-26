let scores = [45, 82, 91, 60, 73];

//map - transfor every element, return a new arrays
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

//Filter
let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce

let total = scores.reduce((a, b) => a + b, 0);
console.log(total);