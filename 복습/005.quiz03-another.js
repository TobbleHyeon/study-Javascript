// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요.
// continue 문을 사용하세요.
// 힌트 : 짝수인지 아닌지는 % 연산자를 사용하면 알 수 있습니다.

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i % 2 === 0 || j % 2 === 0) continue;
    console.log(i, "*", j, "=", i * j);
  }
}

/*
1 * 1 = 1
1 * 3 = 3
1 * 5 = 5
1 * 7 = 7
1 * 9 = 9
3 * 1 = 3
3 * 3 = 9
3 * 5 = 15
3 * 7 = 21
3 * 9 = 27
5 * 1 = 5
5 * 3 = 15
5 * 5 = 25
5 * 7 = 35
5 * 9 = 45
7 * 1 = 7
7 * 3 = 21
7 * 5 = 35
7 * 7 = 49
7 * 9 = 63
9 * 1 = 9
9 * 3 = 27
9 * 5 = 45
9 * 7 = 63
9 * 9 = 81
*/