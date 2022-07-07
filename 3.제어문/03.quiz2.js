// 퀴즈!

// let num = 2;


// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// if
function ODD(num) {
  if (num % 2 === 0) {
    console.log('👍');
  }
  if (num % 2 === 1) {
    console.log('👎');
  }
}
ODD(7);

// ternary

let num = 8;
// num % 2 === 0 ? console.log('👍') : console.log('👎');
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);