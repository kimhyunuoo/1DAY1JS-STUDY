//조건문 연습문제 풀이

//첫번째 문제
const today = 3;
let weekend = "";

switch (today) {
  case 1:
    weekend = "월요일";
    break;
  case 2:
    weekend = "화요일";
    break;
  case 3:
    weekend = "수요일";
    break;
  case 4:
    weekend = "목요일";
    break;
  case 5:
    weekend = "금요일";
    break;
  case 6:
    weekend = "토요일";
    break;
  case 7:
    weekend = "일요일";
    break;
  default:
    weekend = "not Numbering !!";
    break;
}
console.log(weekend);
