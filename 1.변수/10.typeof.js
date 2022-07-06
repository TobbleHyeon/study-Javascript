//typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number
variable = '123';
console.log(typeof variable); // string

variable = {};
console.log(typeof variable); // object

variable = function(){};
console.log(typeof variable); // function

variable = Symbol(); // ⬅ 자바스크립트는 할당된 값에 따라 타입이 결정 됨!
console.log(typeof variable); // symbol