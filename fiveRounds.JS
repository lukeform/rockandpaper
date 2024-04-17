// console.log("Hello World");
const gameOptions = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let playerScore = 0;
let computerScore = 0;


// function fiveRounds(){
//for (let round = 1; round < 6; round++) {
        
 const results = document.querySelector("#results");

 const content = document.createElement("div");
 content.classList.add("content");
 content.textContent = "Player: " + playerScore + "Computer: " + computerScore;
 results.appendChild(content);
 
    const paper = document.querySelector("#paper");
    paper.addEventListener("click", assignPaper);

 const rock = document.querySelector("#rock");
       rock.addEventListener("click", assignRock);

const scissors = document.querySelector("#scissors");
      scissors.addEventListener("click", assignScissors);

const play = document.querySelector("#letsPlay");
      play.addEventListener("click",() => {
        getComputerChoice();
        letsPlay();
        updateScore();
      })     

function assignPaper(){
        userChoice = "paper";
        console.log(userChoice);
        return userChoice;
        }
         
function assignRock(){
        userChoice = "rock";
        console.log(userChoice);
        return userChoice;
        }

function assignScissors(){
        userChoice = "scissors";
        console.log(userChoice);
        return userChoice;
        }
    
function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * gameOptions.length);
    
    if (computerChoice === 0) {
        computerChoice = "rock";
        console.log(computerChoice);
        return computerChoice;
    }
    else if (computerChoice === 1) {
        computerChoice = "paper";
        console.log(computerChoice);
        return computerChoice;
    }
    else {
        computerChoice = "scissors";
        console.log(computerChoice);
        return computerChoice;
    }
}
//console.log(getComputerChoice())
           
function letsPlay(){

    if (userChoice === computerChoice){
    console.log("it's a tie, you both picked " + userChoice + " .The score stands at: Player: " + playerScore + " Computer: " + computerScore);
        return("it's a tie, you both picked " + userChoice + " .The score stands at: Player: " + playerScore + " Computer: " + computerScore);
}
    else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors")  || (userChoice === "scissors" && computerChoice === "paper")){
        playerScore = playerScore+1;
        console.log("You win. " + userChoice + " beats " + computerChoice + " .The score stands at: Player: " + playerScore + " Computer: " + computerScore);
        return("You win. " + userChoice + " beats " + computerChoice + " .The score stands at: Player: " + playerScore + " Computer: " + computerScore);
    }
    else{
        computerScore = computerScore+1;
        console.log("you lose. " + userChoice + " loses to " + computerChoice + "The score stands at: Player: " + playerScore + " Computer: " + computerScore);
        return("you lose. " + userChoice + " loses to " + computerChoice + "The score stands at: Player: " + playerScore + " Computer: " + computerScore);
    }
    
} 

function updateScore(){
    
    if(playerScore < 5 && computerScore < 5){
    const results = document.querySelector("#results");

    //const content2 = document.createElement("div");
    content.classList.add("content");
    content.textContent = "Player: " + playerScore + "Computer: " + computerScore;
    results.appendChild(content);

}
    else{

        const results = document.querySelector("#results");

        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = "GAME OVER. Player: " + playerScore + "Computer: " + computerScore;
        results.appendChild(content);

    }
}
     
        
    
    // if (playerScore > computerScore){
    
    // console.log("YOU WIN! The final scores stand at: Player " + playerScore + " Computer: " + computerScore);
    // }
    // else if (computerScore > playerScore){
    //     console.log("YOU LOSE! The final scores stand at: Player " + playerScore + " Computer: " + computerScore);

    // }
    // else{

    //     console.log("IT'S A TIE! The final scores stand at: Player " + playerScore + " Computer: " + computerScore);
    // }





// fiveRounds();






            

