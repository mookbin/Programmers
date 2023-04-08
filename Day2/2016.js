//https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  var answer = "";
  let week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 0;

  for (let i = 0; i < a - 1; i++) {
    day += month[i];
  }
  day += b - 1;

  answer = week[day % 7];

  return answer;
}

//일단.. 1월 1금 2토 3일 4월 5화 6수 7목 ~ 이렇게 쭉 도니까
// for 쓰긴 해야됨
// 요일 배열 만들고 일단
// 금욜로 시작, 1월 1일 금욜이니까

// 윤년이면 2월은 29일까지고 월시작 ~ 월 끝..
//전부 돌려야됨...
//31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 맞지
// 인덱스0부터 시작하니까 a -1 , b-1
// day가 입력한 일 싹 다 더한거(에다가 -1)
//day 를 7로 나눈 나머지가 0일때 금 1일 때 토 이런 식

//팀원분이 알려주신getDay()로도 풀 수 있다.
//https://www.w3big.com/ko/jsref/jsref-getday.html#gsc.tab=0
