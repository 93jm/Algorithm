function solution(participant, completion) {
  participant.sort();
  completion.sort();
  return participant.find((v, i) => v !== completion[i]);
}
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
