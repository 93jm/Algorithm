//문제 자체가 질이 별로 좋지가 않다
//11번 테스트케이스 자체가 문제 전달 상 제대로 전달된 부분이 하나도 없다
//아래는 내가 푼 케이스고 11번 때문에 막혔기에 다른 사람들이 사용했던 정규표현식 로직을 가지고와 패스만 했다

function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// =====================

function solution(s) {
  console.log(s);
  let answer = Number(s);
  if (s.length === 4 || s.length === 6) {
    return isNaN(answer) ? false : true;
  }
  return false;
}
