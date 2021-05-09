function solution(n) {
  var test = String(n);
  var answer = [];
  for (let i = test.length - 1; i >= 0; i--) {
    answer.push(Number(test[i]));
  }
  return answer;
}
