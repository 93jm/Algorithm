function solution(phone_number) {
    // console.log(phone_number.split(''))
    return phone_number.split('').map((el, idx) => {
      if(idx >= phone_number.length-4) {
        return el;
      }else {
        return '*';
      }
    }).join("");
  // return 
  // console.log(phone_number)
}

solution('01029104050')