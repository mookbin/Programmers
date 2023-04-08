//https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let newArray = [];
    for (let j = 0; j < arr2[i].length; j++) {
      newArray.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(newArray);
  }
  return answer;
}

//2차원 배열이니까...
// 같은 인덱스에 있는 것끼리 더해줘야됨 일단
// 그리고 더한 값을 빈 배열을 하나 만들어서 거기에 넣어주자
// 두 배열끼리 길이 같을 때만 성립하는 식...
