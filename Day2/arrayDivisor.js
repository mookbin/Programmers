//https://www.w3big.com/ko/jsref/jsref-getday.html#gsc.tab=0

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length !== 0 ? answer.sort((a, b) => a - b) : [-1];
}

//divisor 로 나눈게 나누어 떨어지면 (나머지가 0이면) answer에 담자
//그리고 나누어 떨어지는거 없으면(answer가 비어있으면) 배열에 -1 담고 아니면 오름차순으로 정렬
