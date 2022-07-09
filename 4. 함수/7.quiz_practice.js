// 주어진 숫자 만큼 0부터 순회하는 함수를 만들것.
// 순회하면서 주어진 특정한 일을 수행해야 함.
// ex) 5를 전달하고 순회하는 숫자를 다 출력하고 싶음.
// ex) 5를 전달하고 순회하는 숫자의 두배값을 다 출력하고 싶음.

// Hint : function iterate(max, action) {}

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

// function once(num) {
//   console.log(num);
// }

// function double(num) {
//   console.log(num * 2);
// }

// iterate(1, once);

iterate(5, (num) => {
  console.log(num);
})

iterate(5, (num) => {
  console.log(num * 2);
})