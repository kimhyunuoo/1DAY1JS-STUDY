//요일 출력 스위치 문

let today = 5;
let day = "";

switch (today) {
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
  case 7:
    day = "sunday";
    break;
}

console.log(day);

// break문을 작성하지 않으면, 바로 아래 코드가 보여지게 된다.

//browser 설치 유무 스위치 코드 작성
let browser = "";

switch (browser) {
  case "Explorer":
    msg = "엑티브 인스톨러를 설치하세요!";
    break;
  case "chrom":
  case "firefox":
  case "safari":
  case "opera":
    msg = "Supported browsers!";
    break;

  default:
    msg = "Unsupported browsers!";
    break;
}
console.log(msg);
