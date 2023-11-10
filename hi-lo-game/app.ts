import inquirer from "inquirer";

async function main() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  const questions = [
    {
      type: "input",
      name: "guess",
      message: "What number am I thinking of?",
    },
  ];

  let guess;
  let attempts = 0;

  do {
    const response = await inquirer.prompt(questions);
    guess = Number(response.guess);

    attempts++;

    if (guess < secretNumber) {
      console.log("Too low!");
    } else if (guess > secretNumber) {
      console.log("Too high!");
    }
  } while (guess !== secretNumber);

  console.log(
    `Congrats! You guessed the secret number in ${attempts} attempt(s)!`
  );
}

main();
