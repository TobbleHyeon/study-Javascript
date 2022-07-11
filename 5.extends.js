// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 상속하고 있는 부모 클래스를 가리킴. 부모 클래스에 정의 된 내용을 가져 옴.
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자!');
  }
  // 오버라이딩 overriding - 부모의 내용을 덮어 씌우고 싶을 때 사용.
  eat() {
    super.eat();
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();