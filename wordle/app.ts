import { readFile } from "fs/promises";
import inquirer from "inquirer";

async function main() {
  const words = JSON.parse(await readFile("words.json", "utf-8"));
  const fiveLetterWords = words.filter((word: string) => word.length === 5);

  const randomIndex = Math.floor(Math.random() * fiveLetterWords.length);
  const secretWord = fiveLetterWords[randomIndex];

  console.log(`[${secretWord}] Sssshhhh...for testing...`);

  let guess: string;

  do {
    do {
      const response = await inquirer.prompt([
        {
          name: "guess",
          message: "What is the word?",
        },
      ]);

      guess = response.guess;
    } while (guess.length !== 5);

    const status = [];

    for (let i = 0; i < 5; i++) {
      if (guess[i] === secretWord[i]) {
        status.push(guess[i].toUpperCase());
      } else if (secretWord.includes(guess[i])) {
        status.push(guess[i].toLowerCase());
      } else {
        status.push("_");
      }
    }

    console.log(status.join(""));
  } while (guess !== secretWord);
}

main();
