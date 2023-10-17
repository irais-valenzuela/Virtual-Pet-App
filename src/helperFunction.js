const findEmotion = (string) => {
  const result = [];
  const emotion = string.split("");

  for (let i = 0; i < emotion.length; i++) {
    const letter = emotion[i];
    if (letter === "-") {
      break;
    } else {
      result.push(letter);
    }
  }
  return result.join("");
};

export default findEmotion;
