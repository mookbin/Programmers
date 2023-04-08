// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let pNum = 0;
  let yNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      pNum++;
    } else if (s[i] === "y" || s[i] === "Y") {
      yNum++;
    }
  }
  return pNum === yNum;
}

//약간 숫자야구 스트라이크 개수 뽑는거랑 비슷?

// function solution(s) {
//     let pNum = []
//     let yNum = []
//     for (let i =0; i < s.length; i++) {
// if(s[i] === "p" || s[i] ==="P") {
//     pNum.push("a")
// } else if(s[i] === "y" || s[i] ==="Y") {
//     yNum.push("a")
// }
//     }
//     return pNum.length === yNum.length
// }
