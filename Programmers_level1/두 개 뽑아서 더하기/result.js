function solution(number) {
  var answer = [];
  var test = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      test.push(number[i] + number[j]);
    }
  }
  test
    .sort((a, b) => a - b)
    .forEach((el) => !answer.includes(el) && answer.push(el));
  return answer;
}
