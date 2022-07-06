/** 문자열타입 - 따옴표 사용. */
let string = '안녕하세요'; string = `안녕!`;
console.log(string);

//특수문자 출력하는 법
string = '"안녕!"';
console.log(string);

string = '안녕!\n크크야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '크크';
let greetings = "'안녕!, " + id + "😼\n즐거운 하루 보내요!'"
console.log(greetings);

greetings = `'안녕, ${id} 😼
즐거운 하루 보내요!`
console.log(greetings);