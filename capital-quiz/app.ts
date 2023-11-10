import { readFileSync } from "node:fs";
import inquirer from "inquirer";

interface ICountry {
  country: string;
  city: string;
}

const readCountries = (): ICountry[] => {
  const fileContents = readFileSync("./capitals.json", "utf-8");

  return JSON.parse(fileContents);
};

const countries = readCountries();
const countryCount = countries.length;

let attempts = 0;
let successes = 0;

async function askQuestion() {
  const randomCountryIndex = Math.floor(Math.random() * countryCount);

  const country = countries[randomCountryIndex];

  const response = await inquirer.prompt([
    {
      type: "input",
      name: "answer",
      message: `What is the capital of ${country.country}?`,
    },
  ]);

  attempts++;

  const correct =
    response.answer.toLocaleLowerCase() === country.city.toLocaleLowerCase();

  if (correct) {
    console.log("Correct! :)");

    successes++;
  } else {
    console.log(
      `Wrong... :( The capital of ${country.country} is ${country.city}.`
    );
  }

  console.log(`You have answered ${successes} out of ${attempts} correctly.`);
}

(async function () {
  do {
    await askQuestion();
  } while (true);
})();
