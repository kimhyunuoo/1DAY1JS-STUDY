//함수 function
/*
  정해진 입,출력으로 원하는 결과값을 반환해주는 코드 블록
  함수 입력값은 parameter or argument 라고 부른다.
*/
//함수 실습
function multiply(p1, p2) {
  return p1 + p2;
}
console.log(multiply(7, 4));

//일급 함수 란?
let multi = function (p1, p2) {
  return p1 + p2;
};
console.log(multi(7, 8));

// 가장 최신의 화살표 함수!!!(Arrow function)
//ES6 에서 소개된 새로운 기능으로 함수표현을 function 키워드 없이 표현 가능
let sampleFunc = (a, b) => {
  return a + b;
};
console.log(sampleFunc(3, 6));
// 추후에 조금 더 정확하게 알아봐야 할 것 같다.
// 아직은 감이 오지 않음

/*
  나머지 입력값 ---> rest parameters
  함수로 입력한 값 외 추가 적인 값을 표현하기 위한 함수
*/
let sample = function (p1, p2, ...args) {
  console.log(args);
};
sample(1, 2, 3, 4, 5, 6, 7, 8, 9);

//입력 기본값
//함수 내 argument 값으로 기본값을 할당 한 후에 나머지 인지 값에만
//값을 넣어서 사용 한다.
let defaultEl = function (a, b = 1) {
  return a + b;
};
console.log(defaultEl(5));

//함수 예약어
// 함수의 입력값을 array 형태로 가지고 있는 것
let arrayEl = function (a, b, c) {
  console.log(arguments);
};
arrayEl(10, 20, 30);

//code 실습
//함수를 리턴하는 함수 만들기 / 화살표 함수로 구현 하시오 !
let getFuc = (funcType) => {
  if (funcType === "plus") {
    return (p1, p2) => {
      return p1 + p2;
    };
  } else if (funcType === "minus") {
    return (p1, p2) => {
      return p1 - p2;
    };
  } else {
    return (p1, p2) => {
      return null;
    };
  }
};
let plusFunc = getFuc("plus");
console.log(plusFunc(7, 1));
let minusFunc = getFuc("minus");
console.log(minusFunc(7, 1));
let nullFunc = getFuc();
console.log(nullFunc(8, 1));

// 평균값을 계산하는 함수 만들기
let getAvenrage = (...nums) => {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total / nums.length;
};
console.log(getAvenrage(100, 100, 50, 100));
