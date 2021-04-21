function solution(n, m) {
  let test1, test2;
  for (i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      test1 = i;
    }
  }
  test2 = test1 * (n / test1) * (m / test1);
  var answer = [test1, test2];
  return answer;
}
