// '라' 를 모두 제거.

const arr = ['가', '라', '다', '라', '마', '바', '라'];
arr.splice(1,1);
arr.splice(2,1);
arr.splice(4,1);
arr.indexOf('라');
console.log(arr);

// 반복문 만들기

// while 문 - 기본
let a = 0;
while (a < 10) {
  console.log('공무원');
  a++ 
}

while (arr.indexOf('라') > -1) {
  arr.splice(arr.indexOf('라'), 1);
}
console.log(arr);
console.clear();

// while 문 - 변수
let index = arr.indexOf('라');
while (index > -1) {
  arr.splice(index, 1);
  index = arr.indexOf('라'); // '라'를 찾는 행동이 반복되지 않아, 추가 해 줘야 함. (위에 while 문 - 기본 주석 해줘야지 차이 확인 가능)
}
console.log(arr);