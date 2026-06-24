//Pure Functions
//Pure function always return the same output for the same input

//Pure -- no side effects, predictable output
function calculatedpassrate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}
console.log(calculatedpassrate(10, 7));
console.log(calculatedpassrate(10, 7));

//impure--depends on external state

function ispassing(score) {
    return score >= threshold;
}

let threshold = 70;
console.log(ispassing(threshold));

threshold = 50;
console.log(ispassing(threshold));



