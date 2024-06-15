//Allow for plaer input 
const prompt = require("prompt-sync")();

//Computer choice logic

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random(choices.length)*3);
    if (randomChoice === 0) {
        return "rock";
    } if (randomChoice === 1) {
        return "paper";
    } if (randomChoice === 2) {
        return "scissors";
    }
}

// Player Logic
const choices = ["rock", "paper", "scissors"];

function getPlayerChoice(){
    
    let choice = prompt("Please choose rock, paper, or scissors. ").toLowerCase();
    if (choice === "rock" || choice ==="paper" || choice === "scissors") {
        return choice 
    }    else {
        console.log("Invalid choice");
        return;
    }
}

//Initialize score 
let playerScore = 0;
let computerScore = 0;



//Logic to play a single round 

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        console.log("It's a Tie! " + "Player chose: " + playerChoice + " and Computer chose: " + computerChoice)
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("Player won!")
        playerScore++;
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("Computer Wins!")
        computerScore++;
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Player Wins!")
        computerScore++;
        console.log("Computer Score: " + computerScore + " Player Score: "+ playerScore);
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        console.log("Computer Wins!")
        computerScore++;
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer Wins!")
        computerScore++;
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("Player Wins!")
        playerScore++;
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else {
        return
    }
}

//Play 5 rounds of the game 

function playGame(){

for (let i = 0; i < 5; i += 1){
    console.log(`Round ${Math.round(i+i)}`);

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);
}
    if (playerScore<computerScore){
        console.log("Copmuter Wins!")
    } else if (playerScore < computerScore){
        console.log("Player Wins")
    } else {
        console.log("It's a tie!")
    }
}

playGame();