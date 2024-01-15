// [자바스크립트 알고리즘 문제풀이]
// 격자판 최대 합

// 그림 1

// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명
// 최대합을 출력합니다.
// ▣ 입력예제
// 5
// 10 13 10 12
// 15 12 39 30
// 23 11 11 25
// 50 53 15 19
// 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제
// 155

function solution(numbers) {
  //값을 담을 변수 최저값으로 초기화
  let answer = Number.MIN_SAFE_INTEGER;
  //행,열 길이 5x5
  let n = numbers.length;
  //sum1 = 행 값, sum2 = 열 값
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    //각행과 각열의 합을 두번째 for에서 구한 후 담을 변수를 다시 초기화
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += numbers[i][j];
      sum2 += numbers[j][i];
    }
    //최대 값 구하기
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    //왼쪽 상단에서 오른쪽 하단으로 대각선 누적
    sum1 += numbers[i][i];
    //오른쪽 상단에서 왼쪽 하단으로 대각선 누적
    sum2 += numbers[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}
solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
