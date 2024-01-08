// 반복문의 기본 구조
const i = 0;
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let x = 0; x < 3; x++) {
  console.log(x);
}

for (let num = 0; num < 2; num++) {
  console.log(num);
}

//2중 for문 작성하기
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    console.log(`${x} + ${y} = ${x + y}`);
  }
}

//for-in문 복습
let text = "";
const person = { name: "kim", age: 33, job: "dev" };
for (x in person) {
  text += person[x];
}
console.log(text);

//for -of문 복습
let language = "javascript";
let textEl = "";
for (x of language) {
  textEl += x;
  console.log(x);
}
console.log(textEl);
