//식 ---> 문제 해결

const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 === 0) {
    sum += i;
    console.log(i);
  }
}
console.log(sum);

//구구단 만들기
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
