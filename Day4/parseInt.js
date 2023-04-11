function solution(n) {
  let str = "";

  while (n > 0) {
    str += n % 3;
    n = Math.floor(n / 3);
  }

  return parseInt(str, 3);
}

// 빈 문자열 선언
//n이 0보다 큰 동안 반복
// n을 3으로 나눈 나머지를 str에 더한다
// 3으로 나눠진 몫을 계속 나눌 수 있게 갱신
// parseInt(문자열,3)을 쓰면 3진법을 10진법으로 바꿔준다
