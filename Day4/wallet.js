function solution(sizes) {
  let size1 = [];
  let size2 = [];

  for (let card of sizes) {
    card.sort((x, y) => x - y);
    size1.push(card[0]);
    size2.push(card[1]);
  }

  return Math.max(...size1) * Math.max(...size2);
}

//빈 배열 두 개 선언
// for of 문 사용해서 반복해서 순차적으로 출력할 수 있게
//그리고 오름차순으로 정렬
// 더 큰 값 size1 작은 값 size2에 넣어주기
//
