function solution(n) {
  var answer = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }

  return answer;
}

//for문으로 반복하면서 i 값이 홀수면 "수" 짝수면"박"을 answer에 더해준다
