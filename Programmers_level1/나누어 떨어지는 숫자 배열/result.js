function solution(arr, divisor) {
  var answer = [];
  for (let i in arr) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer == "") {
    return answer.push(1) * -1;
  } else {
    return answer.sort((a, b) => a - b);
  }
}

solution([2, 36, 1, 3], 10);
