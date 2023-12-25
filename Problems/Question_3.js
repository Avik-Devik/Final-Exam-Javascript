function LongestWord(sen) {
  const words = sen.match(/[a-zA-Z0-9]+/g); // Extracting words (including numbers)

  let longest = "";

  if (words) {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  }

  return longest;
}

const sentence = "bankai senbonzakura kageyoshi";
const longestWord = LongestWord(sentence);
console.log(longestWord);
