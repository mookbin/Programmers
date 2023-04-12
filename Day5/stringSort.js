function solution(strings, n) {
  let answer = [];

  //1. 인덱스 n을 문자열 가장 앞에 붙인 배열 만들기
  //사전순 정렬에 용이

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
    //car -> a + car -> acar
  }

  //2. 해당 배열을 사전순으로 정렬 (sort)
  strings.sort();

  //3. 앞글자 제거 후 리턴
  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].slice(0); //인덱스 1부터 문자열 끝까지 반환
    answer.push(strings[j]);
  }

  return answer;
}
