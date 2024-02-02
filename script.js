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

//const computerInput = getComputerChoice();

//let playerInput = (prompt("Rock, paper or scissors ? ")).toLowerCase();

function playGame (playerInput, computerInput ) {
  let result = null;
  let whoWins = null;
  switch (playerInput) {
    case computerInput:
      result = "It is a Draw!";
      console.log(result);
      whoWins = "draw"
      break;
    case "rock":
      if (computerInput === "paper") {
        result = "Computer plays paper, so he wins!";
        console.log(result);
        whoWins = "computer";
        break;
      } else {
        result = "Computer plays scissors, so you win !";
        console.log(result);
        whoWins = "player";
        break;
      };
      // since the only variable left is scissors and it can't be a draw, we can use an else
      // statement here.
    case "paper":
      if (computerInput === "rock") {
        result = "Computer plays rock, so you win !";
        console.log(result);
        whoWins = "player";
        break;
      } else {
        result = "Computer plays scissors, so he wins!";
        console.log(result);
        whoWins = "computer";
        break;
      };
      // the same applies here, scissors is the only variable possible, so we can use an else.
    case "scissors":
      if (computerInput === "rock") {
        result = "Computer plays rock, so he wins!";
        console.log(result);
        whoWins = "computer";
        break;
      } else {
        result = "Computer plays paper, so you win!";
        console.log(result);
        whoWins = "player";
        break;
      };
    default:
      result = "Invalid input, refresh and try again."
        console.log(result);
      whoWins = null;
      break;
  };

  return [result, whoWins];
};


function round () {
  let counter = 0;
  let playerPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i <= 4; i++) {
    let playerInput = (prompt("Rock, paper or scissors ? ")).toLowerCase();
    let computerInput = getComputerChoice();
    let values = playGame(playerInput, computerInput);
    if (values[1] === "draw") {
      counter += 1;
      console.log(`Round: ${counter}`)
      console.log(`Player points: ${playerPoints}`);
      console.log(`Computer points: ${computerPoints}`);
    } else if (values[1] === "player") {
      counter += 1;
      playerPoints += 1;
      console.log(`Round: ${counter}`)
      console.log(`Player points: ${playerPoints}`);
      console.log(`Computer points: ${computerPoints}`);
    } else if (values[1] === "computer") {
      counter += 1;
      computerPoints += 1;
      console.log(`Round: ${counter}`)
      console.log(`Player points: ${playerPoints}`);
      console.log(`Computer points: ${computerPoints}`);
    } else {
      counter += 1;
      console.log(`Round: ${counter}`)
      console.log(`Player points: ${playerPoints}`);
      console.log(`Computer points: ${computerPoints}`);
    };
  }; 

  if (playerPoints > computerPoints) {
    console.log(`Congratulations! Player won with ${playerPoints} point`);
  } else if (computerPoints > playerPoints) {
    console.log(`Congratulations ! Computer won with ${computerPoints} point`);
  } else {
    console.log("Game ended with a draw.");
  };
};

let play = round();
