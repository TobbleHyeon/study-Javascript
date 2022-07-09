// 주어진 숫자 만큼 0부터 순회하는 함수를 만들것.
// 순회하면서 주어진 특정한 일을 수행해야 함.
// ex) 5를 전달하고 순회하는 숫자를 다 출력하고 싶음.
// ex) 5를 전달하고 순회하는 숫자의 두배값을 다 출력하고 싶음.

// Hint : function iterate(max, action) {}


function iterate(max, action) {
  for(let i = 0; i<max; i ++) {
    action(i);
  }
}

// set1
function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num*2);
}

iterate(3, log); 
iterate(3, doubleAndLog);


// set 2
iterate(6, (num)=>{console.log(num)});
iterate(4, (num)=>{console.log(num*2)});

// 응용법
setTimeout(()=>{
  console.log('3초 뒤 이 함수가 실행 될 거에요');
}, 3000);