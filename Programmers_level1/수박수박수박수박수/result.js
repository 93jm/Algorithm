//내가푼것
function solution(n) {
  const su = "수박";
  let answer = "";
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i++) {
      i % 2 === 0 ? (answer += su) : i === n ? (answer += "수") : null;
    }
  } else if (n % 2 === 0) {
    for (let i = 1; i <= n; i++) {
      i % 2 === 0 ? (answer += su) : null;
    }
  }
  return answer;
}

//repeat을 이용한것 ...

const solution = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};
