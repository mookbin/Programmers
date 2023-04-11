// function solution(n) {
//   const arr = String(n).split('').map(Number);
//   const sortArr= arr.sort((x, y) => y - x);
//   const newNum = Number(sortArr.join(''));
//   return newNum ;
// }

//정수를 문자열로 전환, split으로 분리, map(Number)으로 숫자 배열 생성
// 내림 차순으로 정렬
// 묶어서 다시 숫자로 변환

function solution(n) {
  let str = n.toString();
  const arr = str.split("");
  const sortArr = arr.sort((x, y) => y - x);
  const numArr = sortArr.join("");
  return parseInt(numArr);
}

//str 변수 지정
// toString 문자열로 바꿔줌
// 배열 지정
// 문자열을 배열로 split
// 숫자 배열로
// sort 정렬
// join 배열을 문자로
//문자를 정수로 parseInt
