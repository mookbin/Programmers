function solution(n) {
  let answer = 0;
  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }

  return answer;
}

//하나씩 잘라서 더한 후에 합쳐주면?

//1. 문자열로 바꾼 후
//2. 정수형으로 변환해서 answer에 하나씩 더해준다
