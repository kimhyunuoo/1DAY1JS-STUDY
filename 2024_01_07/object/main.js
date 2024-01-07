/* 
  object ---> 객체 
  하나의 객체에 여러가지 정보를 담는 것 !
  key : value 를 하나의 쌍으로 저장 
  객체는 복합적인 데이터를 저장할때 주로 사용한다.
  
  ((objcet로 활용한 데이터 표기 방식을 "JSON"이라 한다.))
  
  key에 대해 접근 방법으로는 점표기법, 대괄호 표기법으로 접근 가능
  
      *** 객체는 2depth 까지만 중첩하여 표현 가능 ***
*/
//예제
let mycar = {
  name: "santafe",
  color: "white",
  height: `4,830mm`,
  price: `3,546만원 ~ 4,373만원`,
};
//점표기법
console.log(mycar.name);
console.log(mycar.price);
//대괄호 표기법
console.log(mycar["name"]);
console.log(mycar["price"]);
//객체 내 변수 재할당(?)
mycar.name = "sonata";
console.log(mycar.name);

//객체에 대한 실습
//객체 만들기
let userInfo = {
  name: "Joo",
  age: 29,
  address: "경기도 의정부시 송산동",
  gender: "female",
  animal: {
    cat_1: "Dodo",
    cat_2: "hre",
  },
};
console.log(userInfo);

//객체 접근
console.log(userInfo.name);
console.log(userInfo.animal.cat_1);
console.log(userInfo.animal.cat_2);

//객체 추가
userInfo.husband = "KIM";
console.log(userInfo.husband);
//객체 삭제
delete userInfo.address;
console.log(userInfo);

/*
object 순회하기
    +string formattiong 기법 
*/
for (const property in userInfo) {
  console.log(`${property}: ${userInfo[property]}`);
}
//object key / length / value 값 확인하기
console.log(Object.keys(userInfo));
console.log(Object.keys(userInfo).length);
console.log(Object.values(userInfo));

//JSON 문자열로 반환하기 *******************************
// JSON을 통해 문자열로 반환 ---> stringify
const jsonUserinfo = JSON.stringify(userInfo);
console.log(jsonUserinfo);
console.log(jsonUserinfo.name);
console.log(typeof jsonUserinfo);

//만들어진 json문자열을 object로 변경
// 반환된 문자열을 다시 key로 만들어서 JSON 으로 접근 방법 ---> parse
let userInfoJs = JSON.parse(jsonUserinfo);
console.log(userInfoJs.name);
console.log(userInfoJs.husband);
