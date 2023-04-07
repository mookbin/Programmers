// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

//for 안에서
// signs[i]가 참이면 answer에다가 더해주고 signs[i]가 거짓이면 answer에서 빼준다
