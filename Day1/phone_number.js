//https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  let answer = "";
  let newArray = [];

  for (let i = 0; i < phone_number.length - 4; i++) {
    newArray.push("*");
  }

  answer =
    newArray.join("") +
    phone_number.slice(phone_number.length - 4, phone_number.length);
  //phone_number.slice(-4) 로도 가능
  return answer;
}
//새로운 배열을 하나 만든 다음
// phone_number의 길이에서 4개를 뺀 만큼을 반복하게 하자 뒤 네개는 별이 되면 안되니까
//그리고 그걸 새 배열에 넣어준다 push()

//그리고 배열을 join()으로 합쳐주고 slice() 사용해서 phone_number 에서 뒷자리 4개 떼어오자
