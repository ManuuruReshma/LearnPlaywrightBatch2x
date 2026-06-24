let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread new way to concate

let d = [...a, ...b];
console.log(d);

let s = ["pass", "fail", "skip"].join(", ");
console.log(s);
