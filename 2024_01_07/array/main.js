/* 
  array (배열)
  index를 통해 특정 위치 값에 접근이 가능하다.
  index는  Zero Based Numbering 기반으로 배열의 시작은 0부터 시작 !
  목록 및 반복적으로 동일한 형태를 가진 정보를 표시할때 사용 !
*/

//배열의 예시 ---> []를 사용해서 나타낸다.
let fruits = ["apple", "banana", "kiwi", "orange"];

//각 배열의 접근
console.log(fruits); //전체 배열 오픈
//선택 배열 접근 방법
console.log(fruits[0]);

//선택 배열 재할당
fruits[0] = "lemon";
// 0번째 배열에 재할당 하고, 확인하면 apple가 lemon으로 변한 것을 확인!
console.log(fruits[0]);

//예제
//배열(array) 참조 tpye !
let numbers = [1, 2, 3];
//length  ---> 배열의 길이
console.log(numbers.length);
//배열의 마지막으로 추가하는 함수
numbers.push(7);
console.log(numbers);
// 배열의 첫 시작 부분에 추가하는 함수
numbers.unshift(-7);
console.log(numbers);
// 배열의 마지막 제거 함수
numbers.pop();
console.log(numbers);
// 배열의 처음 부분을 제거 하는 함수
numbers.shift();
console.log(numbers);
// 추가 배열을 이어 붙이는 함수
console.log(numbers.concat(4, 5, 6));
//수 많은 배열에서의 요소 찾기 함수
console.log(numbers.indexOf(3));
// 배열 요소 순회 하기
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 빈 배열에 요소 추가
let parson = [];
parson.push("kim");
parson.push(30);
parson.push("develop");
console.log(parson);
