function solution(arr) {
  let minNum = arr.indexOf(Math.min(arr));
  arr.splice(minNum, 1);

  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}

//min으로 arr의 최솟값을 구하고 indexOf로 그 인덱스 값을 구한다
// splice 사용해서 제거
// 빈 배열일 경우에는 [-1] 리턴
