// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요.
// continue 문을 사용하세요.
// 힌트 : 짝수인지 아닌지는 % 연산자를 사용하면 알 수 있습니다.

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  for (let j = 0; j < 10; j++) {
    if (i % 2 === 0) continue;
    console.log(i, j, i * j);
  }
}

/*
1 0 0
1 1 1
1 2 2
1 3 3
1 4 4
1 5 5
1 6 6
1 7 7
1 8 8
1 9 9
3 0 0
3 1 3
3 2 6
3 3 9
3 4 12
3 5 15
3 6 18
3 7 21
3 8 24
3 9 27
5 0 0
5 1 5
5 2 10
5 3 15
5 4 20
5 5 25
5 6 30
5 7 35
5 8 40
5 9 45
7 0 0
7 1 7
7 2 14
7 3 21
7 4 28
7 5 35
7 6 42
7 7 49
7 8 56
7 9 63
9 0 0
9 1 9
9 2 18
9 3 27
9 4 36
9 5 45
9 6 54
9 7 63
9 8 72
9 9 81

*/