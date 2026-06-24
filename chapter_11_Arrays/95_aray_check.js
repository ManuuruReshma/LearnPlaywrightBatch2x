// checking array

// check is somthing is an arrsy

let result = Array.isArray(["a", "b"])
console.log(result);

let vales = Array.isArray(["100"])
console.log(vales);

let check = Array.isArray("a", "b")
console.log(check);

let checks = Array.isArray("100")
console.log(checks);

// every and some

console.log([10, 20, 30].every(s => s >= 5)); // True
console.log([10, 20, 30].every(s => s >= 50)); // False

//Playwright API
console.log([200, 202, 202, 203].every(s => s <= 200));

//some -At least one pass
console.log([10, 20, 30].every(s => s > 20)); // True
console.log([10, 20, 30].every(s => (s > 50))); // False


