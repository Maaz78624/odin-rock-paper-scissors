const choiceBtnsContainer = document.querySelector(".player-choices")
const choiceBtns = choiceBtnsContainer.getElementsByTagName("button");
const results = document.querySelector(".results")
const playAgainBtn = document.querySelector(".play-again")


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
    // 1 represents player has won
    winners.push(1)
    createResultsLog("You Win! Rock crushes Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winners.push(1)
    createResultsLog("You Win! Paper covers Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winners.push(1)
    createResultsLog("You Win! Scissors cut Paper");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    // 0 represents player has lost
    winners.push(0)
    createResultsLog("You Lose! Rock crushes Scissors");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winners.push(0)
    createResultsLog("You Lose! Paper covers Rock");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winners.push(0)
    createResultsLog("You Lose! Scissors cut Paper");
  } else {
    // 3 represents player has tied with computer
    winners.push(3)
    createResultsLog("Tie! It's a draw");
  }
};



choiceBtnsContainer.addEventListener("click", (e) => {
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
  if(winners.length === 5){
    for (let i = 0; i < choiceBtns.length; i++) {
      const button = choiceBtns[i];
      button.disabled = true
      playAgainBtn.classList.add("show")
    }
    showResults()
  }
})

playAgainBtn.addEventListener("click", () => {
  for (let i = 0; i < choiceBtns.length; i++) {
    const button = choiceBtns[i];
    button.disabled = false
    playAgainBtn.classList.remove("show")
    results.innerHTML = ""
    winners = []
  }
})

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
    createResultsLog(`You won! ${score}`)
  }else if(playerWon < computerWon) {
    createResultsLog(`You lose! ${score}`)
  }else {
    createResultsLog(`It's a draw! ${score}`)
  }
}
