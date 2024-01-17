// [자바스크립트 알고리즘 문제풀이]
// 가운데 문자 출력

// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.
// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u
// ▣ 입력예제 2
// good
// ▣ 출력예제 2
// oo

// function solution(str) {
//   let answer;
//   let mid = Math.floor(s.length / 2);
//   if(str.length%2===1) {
//     answer=str.substring(mid, mid+1);
//   }else {
//     answer=str.substring(mid-1, mid+1);
//   }

//   return answer;
// }

function solution(str) {
  let type = str.length % 2 === 0 ? "even" : "odd";

  if (type === "even") {
    const idx = str.length / 2;
    return str[idx - 1] + str[idx];
  } else {
    const idx = Math.ceil(str.length / 2) - 1;
    return str[idx];
  }
}

solution("study");
