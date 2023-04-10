function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }

  return true;
}

//길이가 4도 아니고 6도 아니면 false
//isNaN 써서 숫자 아니면 false
