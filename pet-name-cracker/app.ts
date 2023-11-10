import { readFile } from "node:fs/promises";
import bcrypt from "bcrypt";

(async () => {
  const secret = await readFile("./pet.txt", "utf8");

  const words = JSON.parse(await readFile("./words.json", "utf8"));

  for (const word of words) {
    const match = await bcrypt.compare(word, secret);

    if (match) {
      console.log(`The pet's name is ${word}`);

      break;
    }
  }
})();
