/*
  function 
  함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로
  만든 코드 집합 
  유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 코드 블록
  함수는 정의 부분과 호출 부분으로 구성 ex) input / output
  ============================================================ 
  함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로
  작성 권장 
  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/

// 함수의 형태
function add(x, y) {
  return x + y;
}
console.log(add(10, 20));

//함수 정의
// 01
function add(a, b) {
  return a + b;
}
// 02. 함수 표현식
const ADD = function (x, y) {
  return x + y;
};
ADD(10, 20);
console.log(ADD(10, 20));

// 03. 화살표 함수
const addEl = (x, y) => x + y;
addEl(10, 30);
console.log(addEl(10, 30));

// 함수 호출 시 ---> 인수 값 확인
const NUM = function (x, y) {
  return x * y;
};

console.log(NUM(10, 5, 2));
console.log(NUM(3));

//다이나믹 파라미터
// 인수에 값을 지정하지 않은 상태에서 인수의 값을 aaguments로 핸들링

function print_min() {
  console.log(arguments[0] + arguments[1]);
}
print_min(10, 20, 30);
print_min(10, 20);
print_min(10);
print_min();
