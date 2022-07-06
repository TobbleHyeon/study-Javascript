//let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// TypeError: Assignment to constant variable.
// text = 'h1'; 이렇게 하면 안됨!

// 1. 상수 - 항상 대문자로 사용 해야 함.
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};
// apple = {};
console.log(apple); // { name: 'apple', color: 'red', display: '🍎' }
apple.name = 'orange';
console.log(apple); // { name: 'orange', color: 'red', display: '🍎' }
apple.display = '🍏';
console.log(apple); // { name: 'orange', color: 'red', display: '🍏' }

// 객체는 heap 이라는 공간에 보관되어 있고, apple 이라는 변수는 object가 보관 된 변수를 가리키고 있음.