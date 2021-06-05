function solution(arr1, arr2) {
  result = arr1.map((i, j) => arr2[j].map((z, x) => arr1[j][x] + arr2[j][x]));
  return result;
}
