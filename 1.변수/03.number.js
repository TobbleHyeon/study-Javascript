let integer = 123; //정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);
// 자바스크립트에서는 정수 음수 실수 따로 나누지 않아 모두 담을 수 있음.

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 1234567890123456789012345678901234567890n
console.log(bigInt);
// 만약 2^53 보다 큰 수를 표현하고자 한다면 끝에 n을 붙여야 함.