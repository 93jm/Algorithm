// 이건 통과

function solution(n) {
  var arr = [];
  var count = 0;
  for (let i = 0; i < n + 1; i++) {
    arr.push(true);
  }

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) count++;
  }

  return count++;
}

// 이건 왜 안되는지 의문 훨씬 간단해 보이는데.

function solution(n) {
  var result = 0;
  for (var i = 2; i <= n; i++) {
    var count = 0;
    for (var j = 2; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count < 2) {
      result++;
    }
  }
  return result;
}
