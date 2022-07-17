// 다음 코드의 console.log 결과를 맞춰보세요.

const hof = (a) => (b) => (c) => {
  return a + (b*c);
};

const first = hof(3);
console.log(first) // [Function(anoymous)]
const second = first(4);
console.log(second) // [Function(anoymous)]
const third = second(5);
console.log(third); // 23

// first, second, third 가 어떤 반환값을 가지는지 하나씩 확인해봅시다.

// first
(b) => (c) => {
  return 3 + (b * c);
};

// second
(c) => {
  return 3+ (4 *c);
}

// third
3 + (4*5);
