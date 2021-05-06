function solution(arr, n) {
  arr.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
  });
  return arr;
}

// sort는 정렬을 참 다양한 조건에 맞게 해주는 것 같다.
// 어느정도 이해 완료
