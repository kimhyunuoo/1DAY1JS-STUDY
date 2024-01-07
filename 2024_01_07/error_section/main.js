/*
  Syntax error --> 구문 오류

  6 | leg a = 3; 
    |     ^ SyntaxError: Unexpected token (6:4)
    위와 같이 나타나는 것을 볼 수 있다.
*/
let a = 3;
console.log(a);

//Runtiem error
function parseError() {
  JSON.parse("word");
}
parseError();
//수정
function parseError() {
  JSON.parse("{}");
}
parseError();

console.log("this is console.log"); // 출력
console.warn("this is console.warn"); // warn ---> 크롬개발자도구 노란색
console.error("this is console.error"); //error ---> 크롬개발자도구 빨간색

//  break point ---> 진단 및 디버깅
// 코드내에 Deberger 코드를 넣어서 제어해도 되고,
// 개발자 도구 내에 있는 코드 번호에 마킹을 넣어서, 제어 해도 된다.
