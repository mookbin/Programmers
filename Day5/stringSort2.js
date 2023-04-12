// function solution(s) {
//     var answer = '';
//     let arr = s.split("")
//     answer = arr.sort((x,y)=>{if (x < y) return 1;
//     if (x > y) return -1;
//     return 0 })
//     return answer.join("");

//문자열을 배열로 만들어줌
// 내림차순 정렬 sort 왜 저렇게 쓰는지 살짝 이해 실패
// x,y 둘 다 문자열로 된 원소라서 유니코드를 비교해서 내림차순으로 정렬해주는 과정인거같음...
//문자열로 변경

function solution(s) {
  return s.split("").sort().reverse().join("");
}
