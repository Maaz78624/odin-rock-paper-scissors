const choices = ["rock", "paper", "scissors"];
const winners = []

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    winners.push(playerSelection)
    return "You Win! Rock crushes Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winners.push(playerSelection)
    return "You Win! Paper covers Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winners.push(playerSelection)
    return "You Win! Scissors cut Paper";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You Lose! Rock crushes Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose! Paper covers Rock";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You Lose! Scissors cut Paper";
  } else {
    return "Tie! It's a draw";
  }
};


const playGame = () => {
  for(let i = 0; i < 5; i++){
    const playerChoice = prompt(
      "enter your choices (e.g rock, paper, scissors)"
    ).toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
  showResults()
}

const showResults = () => {
  if(winners.length >= 3){
    console.log(`You won! ${winners.length}/5`)
  }else {
    console.log(`You lose! ${winners.length}/5`)
  }
}

playGame()
