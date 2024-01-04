info = {
  user: "kim",
  age: 33,
  weight: 75.6,
  interests: ["music", "movie"],
};

//for ~ in을 통해 출력할때 , 객체에 프로퍼티들을 열거 할 수 있다.

for (let i in info) {
  //key 값 열거
  console.log(i);
  //value 값 열거
  console.log(info[i]);
}
