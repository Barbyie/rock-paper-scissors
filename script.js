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

function playGame (playerInput, computerInput ) {
  let result = null;
  let whoWins = null;
  switch (playerInput) {
    case computerInput:
      result = "It is a Draw!";
      resultsDiv.textContent = result;
      whoWins = "draw"
      break;
    case "rock":
      if (computerInput === "paper") {
        result = "Computer plays paper, so he wins the round!";
        resultsDiv.textContent = result;
        whoWins = "computer";
        break;
      } else {
        result = "Computer plays scissors, so you win the round!";
        resultsDiv.textContent = result;
        whoWins = "player";
        break;
      };
      // since the only variable left is scissors and it can't be a draw, we can use an else
      // statement here.
    case "paper":
      if (computerInput === "rock") {
        result = "Computer plays rock, so you win the round!";
        resultsDiv.textContent = result;
        whoWins = "player";
        break;
      } else {
        result = "Computer plays scissors, so he wins the round!";
        resultsDiv.textContent = result;
        whoWins = "computer";
        break;
      };
      // the same applies here, scissors is the only variable possible, so we can use an else.
    case "scissors":
      if (computerInput === "rock") {
        result = "Computer plays rock, so he wins the round!";
        resultsDiv.textContent = result;
        whoWins = "computer";
        break;
      } else {
        result = "Computer plays paper, so you win the round!";
        resultsDiv.textContent = result;
        whoWins = "player";
        break;
      };
  };

  return [result, whoWins];
};


function round (playerInput) {

    let computerInput = getComputerChoice();
    let values = playGame(playerInput, computerInput);
    if (values[1] === "draw") {
      playerDiv.textContent = `Player points: ${playerPoints}`;
      computerDiv.textContent = `Computer points: ${computerPoints}`;
    } else if (values[1] === "player") {
      playerPoints += 1;
      playerDiv.textContent = `Player points: ${playerPoints}`;
      computerDiv.textContent = `Computer points: ${computerPoints}`;
    } else if (values[1] === "computer") {
      computerPoints += 1;
      playerDiv.textContent = `Player points: ${playerPoints}`;
      computerDiv.textContent = `Computer points: ${computerPoints}`;
    };

  if (counter === 5) {
    resultsDiv.textContent = ""

    if (playerPoints > computerPoints) {
      resultsDiv.textContent = `Congratulations! Player won with ${playerPoints} point`;
    } else if (computerPoints > playerPoints) {
      resultsDiv.textContent = `Congratulations ! Computer won with ${computerPoints} point`;
    } else {
      resultsDiv.textContent = "Game ended with a draw"
    };
    // When the counter reaches 5, it will remove the event listeners since the game ended.
    buttonRock.removeEventListener('click', triggerRock);
    buttonPaper.removeEventListener('click', triggerPaper);
    buttonScissors.removeEventListener('click', triggerScissors);
  };
};

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const counterDiv = document.querySelector('.counter')
const resultsDiv = document.querySelector('.results');
const playerDiv = document.querySelector('.player');
const computerDiv = document.querySelector('.computer');

let counter = 0;
let playerPoints = 0;
let computerPoints = 0;

function triggerRock () {
  let buttonInput = "rock";
  counter += 1;
  counterDiv.textContent = `Round: ${counter}`;
  round(buttonInput);
};

function triggerPaper() {
  let buttonInput = "paper";
  counter += 1;
  counterDiv.textContent = `Round: ${counter}`;
  round(buttonInput);
};

function triggerScissors() {
  let buttonInput = "scissors";
  counter += 1;
  counterDiv.textContent = `Round: ${counter}`;
  round(buttonInput);
};

const clickRock = buttonRock.addEventListener('click', triggerRock);

const clickPaper = buttonPaper.addEventListener('click', triggerPaper);

const clickScissors= buttonScissors.addEventListener('click', triggerScissors);
