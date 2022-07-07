// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else {}
// if(조건1) { } else if(조건2) {} else {}
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎'); // 🍎
  let a = 1;
  console.log(a); // 1
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😆');
}
console.clear();

if (2 < 1) {
  console.log('출력되면 안됨!');
}