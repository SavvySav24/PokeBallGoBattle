let youScore = 0;
let computerScore = 0;


const player = {
  currentChoice: null,
}
const computer = {
  currentChoice: null,
}
 
let playerChooses = function(choice) {
  player.currentChoice = choice;
}

let computerChoose = function (choice) {
  computer.currentChoice = choice;
}


// getting the buttons
const btns = document.querySelectorAll("a.choice");

if (btns !== null){
  for (let i = 0; i < btns.length; i++){
    // executes when the buttons are clicked
     btns[i].addEventListener('click', function(evt) {
      console.log("in event listener"); 
      let clickedElement = evt.currentTarget;
      let characterChoice = clickedElement.id;
      console.log(characterChoice);
      playerChooses(characterChoice);
      computerChooses();
      let winner = calculateWinner();
      updateWinnerStatement(winner);
      updateWinnerScoreboard(winner);
      checkForBigWinner();
      
  });
  }
}

const choices = ['charmander', 'squirtle', 'bulbasaur']

// 
let computerChooses = function(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  let compchoice = choices[randomIndex];
  computerChoose(compchoice);
  console.log(compchoice);
}

// caulculating winner
const calculateWinner = function() {
  // console.log("in calculate winner");
  const playerChoice = player.currentChoice;
  const computerChoice = computer.currentChoice;

  // console.log("player choice=" + playerChoice);
  // console.log("computer choice=" + computerChoice);



  if (computer.currentChoice === player.currentChoice){
    console.log("tie");
    return 0;
  }
  else if ((computer.currentChoice === choices[0]) && (player.currentChoice === choices[1]) ){
    console.log("player wins");
    return "player";
  }
  else if ((computer.currentChoice === choices[0]) && (player.currentChoice === choices[2]) ){
    console.log("computer wins");
    return "computer";
  }
  else if ((computer.currentChoice === choices[1]) && (player.currentChoice === choices[2]) ){
    console.log("player wins");
    return "player";
  }
  else if ((computer.currentChoice === choices[1]) && (player.currentChoice === choices[0]) ){
    console.log("computer wins");
    return "computer";
  }
  else if ((computer.currentChoice === choices[2]) && (player.currentChoice === choices[0]) ){
    console.log("player wins");
    return "player";
  }
  else if ((computer.currentChoice === choices[2]) && (player.currentChoice === choices[1]) ){
    console.log("computer wins");
    return "computer";
  }
  else if((player.currentChoice === choices[0]) && (computer.currentChoice === choices[1]) ){
    console.log("computer wins");
    return "computer";
  }
  else if((player.currentChoice === choices[0]) && (computer.currentChoice === choices[2]) ){
    console.log("player wins");
    return "player";
  }
  else if((player.currentChoice === choices[1]) && (computer.currentChoice === choices[0]) ){
    console.log("player wins");
    return "player";
  }
  else if((player.currentChoice === choices[1]) && (computer.currentChoice === choices[2]) ){
    console.log("computer wins");
    return "computer";
  }
  else if((player.currentChoice === choices[2]) && (computer.currentChoice === choices[0]) ){
    console.log("computer wins");
    return "computer";
  }
  else if((player.currentChoice === choices[2]) && (computer.currentChoice === choices[1]) ){
    console.log("player wins");
    return "player";
  }

  else {
    console.log('no other else statements were true')
  }

}


let updateWinnerStatement = function(winner) {
  let winnersentence;

  if (winner === "computer"){
     winnersentence = "You chose " + player.currentChoice  + " and the computer chose " + computer.currentChoice  + ". The computer wins!"; 
  }
  else if (winner === "player") {
    winnersentence = "You chose " + player.currentChoice  + " and the computer chose " + computer.currentChoice  + ". You win!";
  }
  else {
    winnersentence = "You and the computer both choose the same so it's a tie!";
  }
  console.log(winnersentence);

  const winnerState = document.getElementById("winnerstate");
  winnerState.textContent = winnersentence;

}


let updateWinnerScoreboard = function(winner) {

  if (winner === "computer"){
    computerScore = computerScore + 1;
     console.log('computer score equals' + computerScore)
  }
  else if (winner === "player") {
    youScore = youScore + 1;
    console.log('you score equals' + youScore)
  
  }
  else {
    console.log('tie');
  }
  // console.log(winnersentence);

  const youScoreboard = document.getElementById('scoreboard_score-you');
  const computerScoreboard = document.getElementById('scoreboard_score-computer');

  youScoreboard.textContent = youScore;

  computerScoreboard.textContent = computerScore;

}


let checkForBigWinner = function() {

if (youScore === 3){
  winnersentence = 'Congatulations you are the Pokeball Go Battle Master!!!'
  const winnerState = document.getElementById("winnerstate");
  winnerState.textContent = winnersentence;

  youScore = 0;
  computerScore = 0;


  const youScoreboard = document.getElementById('scoreboard_score-you');
  const computerScoreboard = document.getElementById('scoreboard_score-computer');

  youScoreboard.textContent = youScore;

  computerScoreboard.textContent = computerScore;

}

else if (computerScore === 3){
  winnersentence = 'Oh no... Looks like the computer is the Pokeball Go Battle Master.'
  const winnerState = document.getElementById("winnerstate");
  winnerState.textContent = winnersentence;

  youScore = 0;
  computerScore = 0;

  const youScoreboard = document.getElementById('scoreboard_score-you');
  const computerScoreboard = document.getElementById('scoreboard_score-computer');

  youScoreboard.textContent = youScore;

  computerScoreboard.textContent = computerScore;

}

}

