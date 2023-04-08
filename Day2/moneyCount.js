//https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  var answer = -1;
  let sum = 0;
  for (let i = 0; i <= count; i++) {
    sum += price * i;
  }
  answer = money - sum;
  return answer < 0 ? Math.abs(answer) : 0;
}

// count 만큼 돌 때까지 sum에 price * i 더해줌
// 머니 값에서 그 합계 값을 빼서 반환하면 될 거 같은데?
// 근데 음수로 나오면 안되니까 절댓값 해줘야돼
// 그리고 부족하지 않으면 걍 0 나와야 돼
