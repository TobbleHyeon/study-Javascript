let name = 'apple';
let color = 'red';
let display = '🍎';
let orangeName = 'orange';

//이러한 연관데이터를 한 덩어리로 그룹 지을 수 있는 게 객체임.

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};

console.log(apple); //{ name: 'apple', color: 'red', display: '🍎' }
console.log(apple.name); // apple
console.log(apple.color); // red
console.log(apple.display); // 🍎

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊'
};

console.log(orange); //{ name: 'apple', color: 'red', display: '🍎' }
console.log(orange.name); // 오렌지
console.log(orange.color); // orange
console.log(orange.display); // 🍊

