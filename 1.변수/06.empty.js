// null, undefined
//null : 확실하게 비어있다는 걸 말해주고 싶을 때 사용, undefined : 정해져 있지 않은 상태

let variable;
console.log(variable); //undefined

variable = null;
console.log(variable); //null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
console.log(activeItem); //undefined
activeItem = null; // 활성화된 아이템이 없는 상태!
console.log(activeItem); //null

console.log(typeof null); // object
console.log(typeof undefined); // undefined