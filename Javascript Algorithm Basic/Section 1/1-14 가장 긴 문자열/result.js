// [자바스크립트 알고리즘 문제풀이]
// 가장 긴 문자열

// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.
// ▣ 출력설명
// 첫 줄에 가장 긴 문자열을 출력한다.
// ▣ 입력예제 1
// 5
// teacher
// time
// student beautiful good
// ▣ 출력예제 1
// beautiful

// function solution(arr) {
//   let answer, max=Number.MIN_SAFE_INTEGER;

//   for(let i of arr) {
//     if(i.length>max) {
//       max=i.length;
//       answer=i;
//     }
//   }
//   return answer;
// }

// solution(['teacher', 'time', 'student', 'beautiful', 'good']);

function solution(arr) {
  return arr
    .map((i) => ({ str: i, length: i.length }))
    .sort((a, b) => (a.length > b.length ? -1 : 1))[0].str;
}

solution(["teacher", "time", "student", "beautiful", "good"]);
