/* 
  분기문 == 조건문
  if / else 로 어떤 조건이 true이면 수행 / false이면 로직 종료 
*/
/*
  반복문 == loop
  동일한 처리로 데이터가 여러개 있는 경우에 사용
  for / for-in / for-of 등이 있고, 정해진 양 만큼 반복문 수행가능
  기본적인 로직 
  
  for (let i = 0; i <= 10; i++) {
    true 일때의 값을 반환한다. / return
  } else() {
    false 일때의 값을 반환한다. return
  }
  
  for 문의 기본적인 예시이며, 풀어서 해석하면
    변수 i는 0 부터 시작, 지정 숫자보다 크거나 같을때까지 증가하면서
    반복적으로 실행 (로직)
    --> true 이면 반복적으로 실행 / false 이면 해당 로직 종료 !
*/

//실습예제 (분기문==조건)
//if / else 예제
let bloodtype = "";

if (bloodtype === "B") {
  console.log("you are blood B !!");
} else if (bloodtype === "A") {
  console.log("you are blood A !!");
} else {
  console.log("you are blood O or AB !!!");
}

//switch 예제
//변수 선언
let grade = "B";
let exp = 0;

switch (grade) {
  case "A":
    exp += 100;
    console.log(`You are ${grade} Grade, ${exp}exp got it.`);
    break;
  case "B":
  case "B+":
    exp += 70;
    console.log(`You are ${grade} Grade, ${exp}exp got it.`);
    break;
  case "C":
  case "C+":
    exp += 30;
    console.log(`You are ${grade} Grade, ${exp}exp got it.`);
    break;
  default:
    exp += 10;
    console.log(`You are ${grade} Grade, ${exp}exp got it.`);
}

//for문 ---> 반복문
//증감 ++
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//감소 --
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//for-in
//in ---> index를 의미한다.
let num = [10, 20, 30];
for (let idx in num) {
  console.log(`nums[${idx}]: ${num[idx]}`);
}

//for-in_2
// object의 key값을 꺼낸다.
let person = { name: "kim", age: 23, job: "develop" };
for (let x in person) {
  console.log(`${x}: ${person[x]}`);
}

//for-of ---> array 배열에서 사용 , object에서는 사용안함!
//배열의 값을 꺼내는 것
let cars = ["BMW", "VOLVO", "MINI"];
for (let x of cars) {
  console.log(x);
}
//string array
//문자열을 배열로 반환한다.
let language = "javascript";

let text = "";
for (let x of language) {
  console.log(x);
  text += x;
}
console.log(text);

//while 문 (조건문) ---> 조건을 확인하고 루프를 실행한다.
let counter = 0;
while (counter <= 5) {
  console.log(`counter is ${counter}`);
  counter++;
}

//do-while 문 (조건문) ---> 루프를 일단 실행 시킨 후에 조건을 확인한다.
let count = 10;
do {
  console.log(`Count is ${count}`);
  count++;
} while (count < 10);

//while 과 do-while 의 차이가 크게 있진 않는다.
