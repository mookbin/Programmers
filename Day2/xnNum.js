//https://school.programmers.co.kr/learn/courses/30/lessons/12954
function solution(x, n) {
  let answer = [];
  let num = x;
  for (let i = 0; i < n; i++) {
    answer.push(num);
    num += x;
  }

  return answer;
}

//구한 값을 넣을 변수 선언 후 변수를 배열에 넣어준다

//answer값을 배열로
// for문으로 n이 몇개인지 구한다
//answer 배열에 push 로 x*i

// function solution(x,n) {
//     var result = []

//     for(let i = 1;i <=n; i++){
//         result.push (x*i)

//     }
//     return result
// }
