// 객체끼리 서로 비교해서 true가 나오길 원할 때에는 변수에 저장해서 비교해야 함.

const a = {
  name: "hyeonseok"
};
const array = [1, 2, a];
console.log(a === array[2]); // true