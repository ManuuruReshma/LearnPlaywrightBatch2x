function getString<T>(name: T): T {
    return name;
}

console.log(getString("PRAMOD"));
let value = getString<number>(345)
console.log(value);
console.log(getString(2345));

function getFirstResult<T>(results: T[]) {
    return results[0]!;
}

let firstCode = getFirstResult<number>([200, 400, 500]);
let firstTest = getFirstResult<string>(["Login", "signup", "LogOut"]);

console.log(firstCode);
console.log(firstTest);