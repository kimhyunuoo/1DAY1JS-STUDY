/*
while 문 / do - while 문
while문은 조건을 앞쪽에서 해석하고 실행 되는 반면 ,
do-while문은 조건을 뒤쪽에서 해석해서 최초 1회는 조건문이 실행
최초 1회는 무조건 실행 되어야 하는거면 do-while을 사용
기본적으로는 while문을 많이 사용한다.
*/
//while문
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
//do - while문
i = 4;
do {
  console.log(i);
  i++;
} while (i < 3);
