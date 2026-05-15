// JavaScript Number Types and Numeric Literals
// This file explains all number-related types and literal forms supported in JavaScript.

// 1. Number type (IEEE 754 double precision floating point)
//    - All regular numeric values are of type Number.
//    - This includes integers and floating-point values.
//    - Range: approximately ±1.7976931348623157e+308.
//    - Precision: 53 bits of binary precision.

let decimal = 42;
let floatValue = 3.14;
let scientific = 1.2e3; // 1200

console.log(decimal); // 42
console.log(floatValue); // 3.14
console.log(scientific); // 1200
console.log(typeof decimal); // "number"

// 2. Special Number values
//    - NaN: Not a Number, result of invalid numeric operations.
//    - Infinity / -Infinity: results from overflow or division by zero.

let notANumber = NaN;
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

console.log(notANumber); // NaN
console.log(positiveInfinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(typeof notANumber); // "number"

// 3. Numeric literal formats
//    - Decimal: 10
//    - Binary: 0b1010  (base 2)
//    - Octal: 0o12     (base 8)
//    - Hexadecimal: 0xA (base 16)

let decimalLiteral = 10;
let binaryLiteral = 0b1010;
let octalLiteral = 0o12;
let hexLiteral = 0xA;

console.log(decimalLiteral); // 10
console.log(binaryLiteral); // 10
console.log(octalLiteral); // 10
console.log(hexLiteral); // 10

// 4. BigInt type
//    - Used for integers larger than the safe integer limit for Number.
//    - Represented by appending n to the numeric literal.
//    - BigInt is a distinct type from Number.

let bigIntValue = 9007199254740991n; // max safe integer as BigInt
let bigIntLarge = 123456789012345678901234567890n;

console.log(bigIntValue); // 9007199254740991n
console.log(typeof bigIntValue); // "bigint"

// 5. Safe integer limits for Number
//    - Number.MAX_SAFE_INTEGER: 9007199254740991
//    - Number.MIN_SAFE_INTEGER: -9007199254740991
//    - Values outside this range may lose integer precision.

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 6. Comparison and usage notes
//    - Number and BigInt cannot be mixed in arithmetic without conversion.
//    - BigInt is best for precise integer arithmetic beyond the safe Number range.

let num = 10;
let big = 10n;
// console.log(num + big); // TypeError
console.log(num + Number(big)); // 20
console.log(BigInt(num) + big); // 20n

// Summary:
// - JavaScript has two numeric types: Number and BigInt.
// - Number supports integer, floating point, NaN, Infinity, and various literal formats.
// - BigInt supports arbitrarily large integers (ending with n).
// - Use Number for normal numeric calculations and BigInt for large integer precision.
