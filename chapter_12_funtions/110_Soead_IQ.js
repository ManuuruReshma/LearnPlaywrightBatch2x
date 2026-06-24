function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
let values = add(...num);
console.log(values);

//__________________________

let responseCode = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let values = hasError(...responseCode);
console.log(values);