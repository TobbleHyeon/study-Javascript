const hyeonseok = {
  name: '강현석',
  year: 1993,
  month: 5,
  date: 12,
  gender: 'M',
};

// 접근방법 2가지
console.log(hyeonseok.name);
console.log(hyeonseok['name']); // 강현석
console.log(hyeonseok.gender);
console.log(hyeonseok['gender']); // M

// 객체 수정하기
hyeonseok.gender = 'F',
  console.log(hyeonseok.gender); // F

// 객체 삭제하기
delete hyeonseok.date;
console.log(hyeonseok.date); // undefined

// 특수한 경우
const obj = {
  bc: 'hello',
  '2ca': 'hello1',
  'c a': 'hello2',
  'c-a': 'hello3',
}

// " "이 있거나 특수문자, 숫자가 처음으로 시작하는 값은 [' '] 으로 처리해줘야 함.
console.log(obj.bc);
console.log(obj['bc']);
// console.log(obj.2ca); //error
console.log(obj['2ca']);
console.log(obj['c a']);
console.log(obj['c-a']);