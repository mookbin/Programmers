function solution(n) {
  const str = String(n).split("").reverse().join("");
  const arr = str.split("").map(Number);
  return arr;
}

// 문자열로 변환해서 split으로 쪼개서 배열로 만들어주고 reverse써서 뒤집고 다시 문자열로 합침 //"54321"
// split으로 나눠서 문자열 배열로 만들어주고 //["5","4","3","2","1"]
//숫자 배열로 바꿔주자 //  [5, 4, 3, 2, 1]
