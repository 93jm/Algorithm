function solution(a, b) {
  if (a === b) {
    return a;
  } else {
    var result = 0;
    var answer = [a, b].sort((a, b) => a - b);
    for (let i = answer[0]; i <= answer[1]; i++) {
      result = result + i;
    }
    return result;
  }
}
