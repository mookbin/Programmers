//https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  var answer = "";

  if (s.length % 2 === 1) {
    answer = s[Math.floor(s.length / 2)];
  }
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  }
  return answer;
}

//가운데 인덱스 값을 알아야하는데
// 만약 홀수일 때는 단어의 길이를 2로 나눈 몫을 math.floor해서 구해주는데
// 짝수일 때는 인덱스 값이 두 개가 필요하니까 일단 길이를 나눈 값을 구한 다음에  거기서 1뺀 인덱스 값까지 같이 구해서 더해준다.
//그런데 순서에도 유의해야됨 인덱스 값이 더 작은게 앞으로 가게 배치하기
