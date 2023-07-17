const words = [];

for (let i = 0; i < 100; i++) {
  const wordLength = Math.floor(Math.random() * 10) + 1; // generate a random word length between 1 and 10 characters
  let word = "";

  for (let j = 0; j < wordLength; j++) {
    const charCode = Math.floor(Math.random() * 26) + 97; // generate a random character code between a and z
    word += String.fromCharCode(charCode);
  }

  words.push(word);
}

console.log(words);
