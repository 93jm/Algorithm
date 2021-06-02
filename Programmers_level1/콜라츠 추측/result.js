function solution(num) {
    let result = num;
    let count = 0;
    while(true){
      if(count === 500 && result !== 1){
        return -1
      }
      if(result === 1) {
        return count;
      }
      if(result % 2 === 0){
        result = result/2;
        count = count + 1;
      }else {
        result = result*3+1;
        count = count + 1;
      }
    }
}