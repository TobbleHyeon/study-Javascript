// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같은지 아닌지 확인
// != 값이 다른지 같은지 확인
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true - 문자열 안에 있는 게 숫자로 자동으로 바뀌면서 값을 확인 함.
console.log(2 === '2'); // false - 그러나 타입은 다름.
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear()

const obj1 = {
  name : 'js',
};

const obj2 = {
  name : 'js',
};

console.log(obj1 == obj2); // false - 개별적인 오브젝트로 할당되어 있기 때문에 다르다고 나옴.
console.log(obj1 === obj2); //false - 값 자체가 다르기 때문에 false가 나옴.
console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true

let obj3 = obj2;
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true - 동일한 메모리 주소를 갖고 있기 때문에 모두 true가 나옴.