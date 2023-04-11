function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      return (i + 1) * (i + 1);
    } else if (i * i > n) {
      return -1;
    }
  }
}
//반복하면서 만약 i * i 가 n과 같으면 i+1의 제곱 리턴
// i * i 값이 n보다 커지면 -1 리턴하고 종료
