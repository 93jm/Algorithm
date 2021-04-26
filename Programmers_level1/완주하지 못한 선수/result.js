function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i] === completion[j]) {
        participant.splice(i, 1);
      }
    }
  }

  return participant.toString();
}
