function solution(a, b) {
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var answer = new Date(`2016-${a}-${b}`).getDay();
  return arr[answer];
}
