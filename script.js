const choiceBtns = document.querySelector(".player-choices")
const results = document.querySelector(".results")

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
    createResultsLog("You Win! Rock crushes Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winners.push(1)
    createResultsLog("You Win! Paper covers Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winners.push(1)
    createResultsLog("You Win! Scissors cut Paper");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winners.push(0)
    createResultsLog("You Lose! Rock crushes Scissors");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winners.push(0)
    createResultsLog("You Lose! Paper covers Rock");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winners.push(0)
    createResultsLog("You Lose! Scissors cut Paper");
  } else {
    winners.push(3)
    createResultsLog("Tie! It's a draw");
  }
};

choiceBtns.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice()
  let playerChoice;
  if(e.target.classList.contains("rock")){
    playerChoice = "rock"
  }else if(e.target.classList.contains("paper")){
    playerChoice = "paper"
  }else if(e.target.classList.contains("scissors")){
    playerChoice = "scissors"
  }
  playRound(playerChoice, computerChoice);
})


// const playGame = () => {
//   winners = []
//   for(let i = 0; i < 5; i++){
//     const playerChoice = prompt(
//       "enter your choices (e.g rock, paper, scissors)"
//     ).toLowerCase();
//     const computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
//   }
//   showResults()
// }

const createResultsLog = (resultText) => {
  const p = document.createElement("p")
  p.textContent = resultText
  results.appendChild(p)
}

const showResults = () => {
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

// playGame()
