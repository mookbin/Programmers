function solution(numbers) {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }
  return [...set].sort((a, b) => a - b);
}

//중복 허용 안하는 set을 사용할 것
// 빈 set 객체 선언
//for 중첩
// i 와 j가 다를 때
// 합을 set에 추가
// set을 ...으로 스프레드 하고 배열로 변환 해 준 뒤 오름차순 정렬
// [...set] 대신 Array.from(set) 도 가능
