function solution(n) {
  let result = 0;
  for (i of String(n)) {
    result += Number(i);
  }
  return result;
}
