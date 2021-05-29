function solution(x, n) {
    let test = 0;
    var answer = [];
    while(test<n){  
      test1 = x;
      if(answer.length !== 0){
        answer.push(answer[test-1]+test1)
      }else {
        answer.push(test1)
      }
    test += 1;
    }
    return answer;
}