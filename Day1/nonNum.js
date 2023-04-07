//https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  var answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

//0부터 9까지의 값이 모두 들어있는 배열 a를 하나 만든 다음에
// 배열 a과 배열 numbers를 비교해서 없는 수를 뽑아서 배열 b를 또 만들어
// 그래서 그 배열 b의 원소의 합을 구한다?

//그냥 배열 안만들어도 9보다 작거나 같은 수로 반복을 돌면서 없으면 answer에 추가하는 느낌으로 하는 방법없나
//배열 내장 함수 중에 includes()써보자
// 배열에 특정 요소가 포함되어 있는지 검사하여 true 또는 false를 반환한다고 한다.

// 전체 합45 에서 numbers 정수 더한거를 빼서 구한거 실화야? 천재들 많네

function solution(numbers) {
  var answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

//0부터 9까지의 값이 모두 들어있는 배열 a를 하나 만든 다음에
// 배열 a과 배열 numbers를 비교해서 없는 수를 뽑아서 배열 b를 또 만들어
// 그래서 그 배열 b의 원소의 합을 구한다?

//그냥 배열 안만들어도 9보다 작거나 같은 수로 반복을 돌면서 없으면 answer에 추가하는 느낌으로 하는 방법없나
//배열 내장 함수 중에 includes()써보자
// 배열에 특정 요소가 포함되어 있는지 검사하여 true 또는 false를 반환한다고 한다.

// 전체 합45 에서 numbers 정수 더한거를 빼서 구한거 실화야? 천재들 많네
