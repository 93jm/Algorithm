function solution(s) {
  var result = {};
  result = s
    .toLowerCase()
    .split("")
    .reduce((el, idx) => {
      el[idx] = (el[idx] || 0) + 1;
      return el;
    }, {});
  return result["p"] === result["y"] ? true : false;
}
