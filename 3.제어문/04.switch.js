// 조건문 Conditional Statement
// switch
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우 스위치를 사용할 수 있음.
//ex) 월~토
// break를 꼭 넣어줘야함.

let day = 8; // 0:월, 1: 화... 6: 일
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
}

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
    default:
      console.log('해당하는 요일이 없음!');
}

console.log(dayName);

let condition = 'bad'; // okay, good -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}

console.log(text); // 나쁨!