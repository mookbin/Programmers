//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// 배열의 길이만큼 반복하면서 answer에 더해준다 요소들을
// 그 다음 배열의 길이로 answer을 나눠주면 평균값이 나올듯
