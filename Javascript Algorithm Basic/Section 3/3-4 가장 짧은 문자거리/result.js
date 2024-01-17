// [자바스크립트 알고리즘 문제풀이]
// 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 10121012210

function solution(str, t) {
  //비교할때 사용할 기준이 되는 수
  let p = 1000;
  const answer = [];

  //왼쪽에서 오른쪽으로 탐색하면서 거리 계산
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      p = 0;
    } else {
      p++;
    }
    answer.push(p);
  }

  //비교할 수를 다시 초기화
  p = 1000;

  //오른쪽에서 왼쪽으로 탐색하면서 거리 계산
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

solution("teachermode", "e");
