// 어려웠다 결국 남의 도움을 받았다
// 소수를 계산하는 방법에서 i*i<nums 를 생각을 못했다..

function solution(nums) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        arr.push(nums[i] + nums[j] + nums[z]);
      }
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (helpFunc(arr[i])) {
      count++;
    }
  }
  return count;
}

function helpFunc(nums) {
  for (var i = 2; i * i <= nums; i++) {
    if (nums % i === 0) return false;
  }
  return true;
}

solution([1, 2, 7, 6, 4]);
