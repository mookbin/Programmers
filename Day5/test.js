function solution(answers) {
  let answer = [];
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % 5]) count[0]++;
    if (answers[i] === student2[i % 8]) count[1]++;
    if (answers[i] === student3[i % 10]) count[2]++;
  }
  let max = Math.max(...count); //배열 값들을 개별적으로 전달하기 위해서 ...써줘야함
  // let max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) answer.push(i + 1);
  }
  return answer.sort();
}

//
//각 학생의 답안 배열을 만들어준다
// 답안과 정답을 비교해서 가장 길이가 긴 사람이 1등이 되게 한다
//한 배열에 각 학생의 맞은 개수를 몰아넣고 최댓값을 구한다 max
//여러 학생이 가장 높은 점수를 받을 수도 있기 때문에 for문으로 돌려서 전부 확인해줌
// 오름차순 정렬
