const arr = ['가', '라', '다', '라', '마', '바', '라'];

for (let i = 0; i<arr.length; i++ ) {
  arr.splice(arr.indexOf('라'),1);
}

console.log(arr);