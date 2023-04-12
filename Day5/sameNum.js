function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 빈 배열 선언
// for 문 돌리는데
// arr[i] !== arr[i-1]면
//answer에 집어넣는다.

// function solution (arr) {

//    return  arr.filter((x,index) => x !== arr[index-1])

// }
