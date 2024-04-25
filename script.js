const choices = ["rock", "paper", "scissors"];
let winners = []


function countWinners(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    winners.push(1)
    return "You Win! Rock crushes Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winners.push(1)
    return "You Win! Paper covers Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winners.push(1)
    return "You Win! Scissors cut Paper";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winners.push(0)
    return "You Lose! Rock crushes Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winners.push(0)
    return "You Lose! Paper covers Rock";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winners.push(0)
    return "You Lose! Scissors cut Paper";
  } else {
    winners.push(3)
    return "Tie! It's a draw";
  }
};


const playGame = () => {
  winners = []
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
  console.log(winners)
  const playerWon = countWinners(winners, 1)
  const computerWon = countWinners(winners, 0)
  const tie = countWinners(winners, 3)
  const score = `${playerWon}/5, you: ${playerWon}, computer: ${computerWon}, tie: ${tie}`

  if(playerWon > computerWon){
    console.log("You won!" , score)
  }else if(playerWon < computerWon) {
    console.log("You lose!" , score)
  }else {
    console.log("It's a draw!", score)
  }
}

playGame()
