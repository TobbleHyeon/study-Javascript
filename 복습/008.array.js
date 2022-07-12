// .length - 배열 갯수 값

// 배열 맨 뒷 값 구하는 방식?
// const x = [a,b,c,d,e,f,g....,z];
// console.log(x[x.length-1]);


// arr 라는 배열이 있을 때 배열의 마지막에서 세 번째 요소를 찾아보세요.

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

console.log(arr[arr.length - 3]);

// 요소 추가 또는 수정
const target = ['a', 'b', 'c', 'd', 'e'];
target[5] = 'f';
console.log(target);

const target2 = ['a', 'b', 'c', 'd', 'e'];
target[0] = 'z';
console.log(target);

// unshift() - 배열 앞에 요소 추가
const hanguel = ['가', '나', '다', '라', '마'];
hanguel.unshift('하');
console.log(hanguel);

// shift() - 배열에서 첫번째 요소 제거하기
const number2 = ['1', '2', '3', '4', '5']
number2.shift()
console.log(number2);

// push() - 배열 뒤에 요소 추가
const hanguel2 = ['가', '나', '다', '라', '마'];
hanguel2.push('바');
console.log(hanguel2);

// pop() - 배열에서 마지막 요소 제거하기
const number = ['1', '2', '3', '4', '5']
number.pop()
console.log(number);

console.clear();

// splice(제거할 요소 순서, 제거할 요소 순서 기준으로 몇개) - 중간 요소 제거
const animal = ['cat', 'dog', 'lion', 'tiger', 'rabbit']
animal.splice(1, 1); // 지우기만
console.log(animal);

animal.splice(2, 2, 'fox', 'cow'); // 지우고 추가
console.log(animal);

const code = ['html', 'css', 'javascript', 'c', 'java']
code.splice(2, 0, 'scss', 'sass'); // 지우지 않고 추가
console.log(code);

console.clear();

// includes() - 요소 찾기, 불리언
const find = ['가', '나', '다', '라', '마']
const result = find.includes('라');
const result2 = find.includes('차');
console.log(result);
console.log(result2);

// indexOf, lastIndexOf - 몇번째에 요소가 위치 해 있는지 찾기
const location = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
const locaResult = location.indexOf('e'); // 4
const locaResult2 = location.lastIndexOf('i'); // 8
const locaResult3 = location.lastIndexOf('z'); // -1 배열에 값이 없으면 -1 결과값이 나옴.
console.log(location.length);
console.log(locaResult);
console.log(locaResult2);
console.log(locaResult3);

console.clear();

// 배열 반복하기

const repeat = ['가', '나', '다', '라', '마'];
let i = 0;
while (i < repeat.length) {
  console.log(repeat[i]);
  i++;
}

const repeat2 = ['가', '나', '다', '라', '마'];
for (let j = 0; j < repeat2.length; j++) {
  console.log(repeat2[j]);
}