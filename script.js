const computerChoices = [
  "rock",
  "paper",
  "scissors"
];
function getComputerChoice () {
  const generateRandomInt = Math.floor(Math.random() * computerChoices.length); 
  const computerPlay = computerChoices[generateRandomInt];
  return computerPlay;
};

const computerInput = getComputerChoice();

const playerInput = (prompt("Rock, paper or scissors ? ")).toLowerCase();

function playGame (playerInput, computerInput ) {
  let result = null;
  switch (playerInput) {
    case computerInput:
      result = "It is a Draw!";
      break;
    case "rock":
      if (computerInput === "paper") {
        result = "Computer plays paper, so he wins!";
        break;
      } else {
        result = "Computer plays scissors, so you win !";
        break;
      };
      // since the only variable left is scissors and it can't be a draw, we can use an else
      // statement here.
    case "paper":
      if (computerInput === "rock") {
        result = "Computer plays rock, so you win !";
        break;
      } else {
        result = "Computer plays scissors, so he wins!";
        break;
      };
      // the same applies here, scissors is the only variable possible, so we can use an else.
    case "scissors":
      if (computerInput === "rock") {
        result = "Computer plays rock, so he wins!";
        break;
      } else {
        result = "Computer plays paper, so you win!";
        break;
      };
    default:
      result = "Invalid input, refresh and try again."
      break;
  };

  return result;
};

console.log(playGame(playerInput, computerInput));
