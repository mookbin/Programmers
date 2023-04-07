//https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  var answer = 0;

  let start = a < b ? a : b;
  let end = a > b ? a : b;

  for (let i = start; i <= end; i++) {
    answer += i;
  }

  return answer;
}

// a랑 b 값을 비교해서 더 작은 값을 시작점, 더 큰 값을 끝점으로 지정해준다
//  그 다음 반복문 써서 start가 end에 도달할 때까지 1씩 커지는 숫자 i를 answer에 더해준다
