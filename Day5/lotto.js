function solution(lottos, win_nums) {
  var answer = [];

  let notZero = lottos.filter((i) => i !== 0);
  let zero = lottos.filter((i) => i == 0);

  let worst = notZero.filter((i) => win_nums.includes(i)).length;

  let best = zero.length + worst;

  function rank(num) {
    if (num == 6) return 1;
    else if (num == 5) return 2;
    else if (num == 4) return 3;
    else if (num == 3) return 4;
    else if (num == 2) return 5;
    else return 6;
  }

  answer.push(rank(best), rank(worst));

  return answer;
}

//민우가 산 로또랑 당첨 번호를 비교할 건데
//낙서해서 안보이는 부분은 0으로 적을거임
//그런데 그 0이 당첨번호일 수도 있기때문에
//당첨번호일 경우와 아닐 경우를 구해서
//최대 예상 몇등인지 그리고 최소 몇등인지 나올 수 있게
// 코드를 짜야함

//filter로 0이 아닌 수를 걸러낸다음 몇개가 같은지 구한다 includes = worst
// filter로 0인 수를 걸러낸다음 그 길이를 worst에 더한다 = best
//개수에 따라 맞는 등수를 정해준다 함수만들기
//랭크를 구하는 함수를 하나 만들어준다
//입력숫자가 6이면 0, 5면 1,... 이렇게 출력해주는 함수
