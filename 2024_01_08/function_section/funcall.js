/*
  재귀 함수
  함수 내에 또 다른 함수를 호출하는 함수 ---> 재귀 함수
*/
// 기본적인  tree

// 재귀 함수의 기본적인 모습 switch/for 문과 같이 break 및 continue가
// 없다면 stack overflow 가 되면서 무한재귀함수에 빠지게 된다.
function recursive() {
  recursive();
}
recursive(3);

// stack overflow 해결방안 ---> if(num === 0) return;
function recursive(num) {
  if (num === 0) return 0;
  return num + recursive(num - 1);
}
recursive(3);
console.log(recursive(3));

//factorial(3)  ----> 3* 2* 1* 0
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(4));

/* 
  재귀 함수에서 중요한 부분은 탈출 코드를 작성해서 stack overflow
  가 되지 않도록 만드는 것이 가장 중요하다.
*/
