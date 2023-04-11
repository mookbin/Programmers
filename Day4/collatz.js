function solution(num) {
  let answer = 0;

  while (num !== 1) {
    if (answer === 500) {
      return -1;
    }

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    answer++;
  }

  return answer;
}

// num 이 1이 아닐 때까지 반복하는데 answer가 500이면 -1 리턴
// 삼항연산자 써서 num이 짝수면? num/2 : num*3 +1
//answer 증가
// num 1되면 종료
