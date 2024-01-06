let square = {
  height: 50,
  width: 70,
  color: undefined,
  name: null,
};

// 얉은 복사
// 복사한 값의 정보를 바꾸면 원래의 기존 객체의 정보도 바뀌게 된다.
// 얉은 복사의 단점 !!
let freeSquare = square;
freeSquare.height = 70;
console.log(freeSquare);
console.log(square);

// 깊은 복사 (deep copy)
// JSON / stringify 사용 하여 깊은 복사 하기
let deepSquare = JSON.parse(JSON.stringify(square));
deepSquare.height = 80;
console.log(deepSquare);
console.log(square);

// Object 함수 사용해서 복사 하는 방법
// 깊은 복사에 가장 안전한 방법이라고 할 수 있다.
let deepSquare_2 = Object.assign({}, square);
deepSquare_2.height = 120;
console.log(square);
console.log(deepSquare_2);
