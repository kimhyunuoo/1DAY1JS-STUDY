/*
  연산자
  연산자의 종류 ?
  할당 연산자 =, +=
  비교 연산자 == , ===, >=, <= 
  산술 연산자 +, -, /, *

  비트 연산 이란?
  and(&&) ---> a와 b 둘다 1이 여야 1이 나온다. 
  or(||) --->  a와 b 둘 중 하나만 1여도 1이 나온다.
*/

// 동등 비교와 일치 비교 각 연산자의 의미의 예제
// 정확하게 사용하는 것은 "==="
if (null == undefined) {
  console.log(true);
} else {
  console.log(false);
}

//동등연산자 예시 ---> 느슨한 비교!
console.log(256 == "256");
console.log(true == 1);
console.log(undefined == null);

//일치연산자 예시 ---> 세밀한 비교!
console.log(256 === "256");
console.log(true === 1);
console.log(undefined === null);

//할당 연산자의 예제
let a = "sliva";
console.log(a);

let b = 10;
b += 3; //b = b + 3
console.log(b);

//비트 연산자
console.log(1 << 2);
// 100 ---> 1을 두번 밀어서... (확실하게 모름)

//산술 연산자
// 사칙 연산 및 나머지(%)
console.log(2 + 3);
console.log(9 - 3);
console.log(6 * 4);
console.log(9 / 4);
console.log(9 % 4);
