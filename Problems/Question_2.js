function QuestionsMarks(str) {
  let foundPair = false;

  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      let firstNum = parseInt(str[i]);
      let questionMarks = 0;

      for (let j = i + 1; j < str.length; j++) {
        if (/\d/.test(str[j])) {
          let secondNum = parseInt(str[j]);

          if (firstNum + secondNum === 10) {
            if (questionMarks !== 3) {
              return "false";
            }
            foundPair = true;
          }

          break;
        } else if (str[j] === "?") {
          questionMarks++;
        }
      }
    }
  }

  return foundPair ? "true" : "false";
}

const str = "arrb6???4xxbl5???eee5";
const result = QuestionsMarks(str);
console.log(result);
