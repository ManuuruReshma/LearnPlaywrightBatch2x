// 38_Confusing_comparision.js
// Example file to demonstrate confusing cases with == and === in JavaScript

console.log('--- Loose equality (==) vs Strict equality (===) ---');

const values = [
    { a: 0, b: false },
    { a: 1, b: '1' },
    { a: 0, b: '0' },
    { a: '', b: false },
    { a: null, b: undefined },
    { a: [], b: false },
    { a: [1], b: true },
    { a: [1, 2], b: '1,2' },
    { a: {}, b: '[object Object]' },
    { a: NaN, b: NaN },
];

values.forEach(({ a, b }) => {
    console.log(`\nComparing ${JSON.stringify(a)} and ${JSON.stringify(b)}:`);
    console.log('  ==  :', a == b);
    console.log('  === :', a === b);
});

console.log('\n--- Some additional confusing cases ---');

console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);
console.log('0 == false:', 0 == false);
console.log('0 === false:', 0 === false);
console.log("'' == false:", '' == false);
console.log("'' === false:", '' === false);
console.log("'\n' == 0:", '\n' == 0);
console.log("'\n' === 0:", '\n' === 0);
console.log('[] == false:', [] == false);
console.log('[] === false:', [] === false);
console.log('[0] == false:', [0] == false);
console.log('[0] === false:', [0] === false);
console.log('[null] == false:', [null] == false);
console.log('[null] === false:', [null] === false);

console.log('\n--- Notes ---');
console.log('Loose equality (==) performs type conversion before comparison.');
console.log('Strict equality (===) compares value and type without coercion.');
console.log('Prefer === for predictable comparisons unless you explicitly need coercion.');
