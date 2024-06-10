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


const choices = ["rock", "paper", "scissors"];

function getPlayerChoice(){
    
    let choice = prompt("Please choose rock, paper, or scissors. ")
        
}
console.log(getPlayerChoice())