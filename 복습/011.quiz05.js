//function quiz
// 매개변수로 x,y,z를 받아 곱한 값을 반환하는 multiply 함수를 만들어 보기.
// 단, 화살표 함수로 만드세요.

const multiply = (x, y, z) => {
  return x * y * z;
}

// 중괄호랑 return이 바로 이어지면 생략이 가능하다.
// const multiply = (x,y,z) => x*y*z;
// const multiply = (x,y,z) => (x*y*z); 괄호 넣어서 헷깔리는 부분 해결?ㅋ

console.log(multiply(2, 3, 5));

// 함수 내부에서 매개변수 외에도 변수나 상수를 선언할 수 있음.
function minus1(x,y) {
  const a = 100;
  return (x-y) * a;
}

console.log(minus1(5,3));