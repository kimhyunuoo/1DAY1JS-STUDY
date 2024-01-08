/*
break / continue 
break ---> 반복문 수행 시 코드블록 탈출 식별자
          다중 반복문 경우 가장 안쪽 반복문 탈출
continue ---> 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지
              블록 코드를 종료 후에 반복문에 명시 된 조건 판단
*/

// break / continue 실습 예제
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  {
    console.log(i);
  }
}

text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  {
    console.log(i);
  }
}
