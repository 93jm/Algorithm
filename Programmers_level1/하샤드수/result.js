function solution(x) {
  str = x.toString();
  helper = 0;
  for (i in str) {
    helper += Number(str[i]);
  }
  return x % helper === 0 ? true : false;
}
