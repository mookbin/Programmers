function solution(x) {
  let sum = 0;
  let newArr = String(x).split("").map(Number);
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return x % sum === 0;
}

// x를 문자열로 바꾸고 split으로 분리한 다음 map(Number)로 숫자 배열 만들기
// for문으로 sum에 더해주기

// sum =0
// Number
// arr
// for
// sum += Number(arr[i])

// function solution(x) {
//     let sum =0
//     let arr = String(x).split("")
//     for(let i=0; i <arr.length; i++){

//         sum+= Number(arr[i])

//     }return x % sum ===0

// }
