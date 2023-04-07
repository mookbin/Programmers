//school.programmers.co.kr/learn/courses/30/lessons/12969

https: process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  // 받은 데이터를 split해서 배열 n에 넣는다
  const a = Number(n[0]),
    b = Number(n[1]);
  // 배열 n의 요소 0번째 즉 첫번째(정수n)를 변수 a, 두번째(정수m)를 변수 b라고 하자

  //a는 한 줄에 별을 몇 개 찍을지, b는 줄을 몇 번 반복할지
  for (let i = 0; i < b; i++) {
    let star = "";
    for (let j = 0; j < a; j++) {
      star += "*";
    }
    console.log(star);
  }
});
