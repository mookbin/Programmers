function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

//filter()로 completion 에 없는 이름 뽑아내기 => 동명이인이 있을 경우 복잡해짐
// 오름차순으로 정렬해서 인덱스끼리 비교해서 인덱스가 달라지는 구간에서 뽑아낸다?
