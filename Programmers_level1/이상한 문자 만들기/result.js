//=====내가 푼 코드=====

function solution(s) {
  var answer = s.split(" ");
  var test = "";
  for (i in answer) {
    for (let j = 0; j < answer[i].length; j++) {
      if (j % 2 === 0) {
        test += answer[i][j].toUpperCase();
      } else if (j % 2 !== 0) {
        test += answer[i][j].toLowerCase();
      }
    }
    test += " ";
  }
  return test.slice(0, -1);
}

//=====남이 풀었지만 내가 이해하기 쉬웠던 코드=====

function toWeirdCase(s) {
  return s
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
        .join("")
    )
    .join(" ");
}
