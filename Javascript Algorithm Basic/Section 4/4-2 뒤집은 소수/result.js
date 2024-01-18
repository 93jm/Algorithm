// [자바스크립트 알고리즘 문제풀이]
// 뒤집은 소수

// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100
// ▣ 출력예제 1
// 23 2 73 2 3

// function isPrime(n) {
//     if(n === 1) {
//       return false;
//     }

//     for(let i=2; i<n/2; i++) {
//       if(n%i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   function solution(numbers) {
//     let answers = [];
//     for(let i of numbers) {
//       let res = 0;

//       //숫자 뒤집기 array method X
//       while(i) {
//         let t=i%10;
//         res=res*10+t;
//         i=Math.floor(i/10);
//       }

//       if(isPrime(res)) {
//         answers.push(res)
//       }
//     }

//     return answers;
//   }

function solution(numbers) {
  let answers = [];
  for (let i of numbers) {
    let reverseNumber = i.toString().split("").reverse().join("") * 1;

    if (reverseNumber > 1) {
      for (let x = 2; x <= reverseNumber; x++) {
        //자기 자신보다 작은데 나눠서 나머지가 0이 되는 경우는 소수가 아님
        if (x < reverseNumber && reverseNumber % x === 0) {
          break;
        }
        if (x === reverseNumber) {
          answers.push(reverseNumber);
        }
      }
    }
  }

  return answers;
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
