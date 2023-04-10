function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((a, index) => {
          if (index % 2 === 0) {
            return a.toUpperCase();
          } else {
            return a.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
}

//split(' ')으로 공백기준으로 단어를 나눈 다음 map을 사용해 새로운 배열 word로 만든다
// 그다음 단어를 한글자씩 또 나눠서 a에 넣어준다
// 인덱스가 짝수인경우 대문자
// 홀수인 경우 소문자로 바꿔준다
// 다시 합쳐준다
