function solution(arr) {
    let min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1)
    if(arr.length <= 1){
      return [-1];
    }else {
      return arr;
    }
}