if (process.argv.length < 3) {
  console.log("Usage: <number of guests> [<iterations>]");
  process.exit(1);
}

const numberOfGuests = Number(process.argv[2]);

const iterations =
  process.argv.length > 3 ? Number(process.argv[3]) : 1_000_000;

let matches = 0;

for (let i = 0; i < iterations; i++) {
  const birthdays = new Set<number>();

  for (let j = 0; j < numberOfGuests; j++) {
    const birthday = Math.floor(Math.random() * 365);
    birthdays.add(birthday);
  }

  if (birthdays.size < numberOfGuests) {
    matches++;
  }
}

console.log(
  `probability of at least two guests sharing a birthday in a party of ${numberOfGuests} is ${
    matches / iterations
  }`
);
