function getComputerChoice () {
  let computerChoices = [
    "rock",
    "paper",
    "scissors"
  ];

  return Math.floor(Math.random() * computerChoices.length);
};

console.log(getComputerChoice());
