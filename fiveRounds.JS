console.log("Hello World");
const gameOptions = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let playerScore = 0;
let computerScore = 0;


// user chooses rock paper or scissors
// store this answer 
// computer randomly chooses between rock paper and scissors

function fiveRounds(){
    for (let round = 1; round < 6; round++) {
        
        // console.log(round);
        // getComputerChoice();
        // getUserChoice();
        // letsPlay({userChoice}, {computerChoice});
    
        function getComputerChoice(){
            computerChoice = Math.floor(Math.random() * gameOptions.length);
            
            if (computerChoice === 0) {
                return computerChoice = "rock";
            }
            else if (computerChoice === 1) {
                return computerChoice = "paper";
            }
            else {
                return computerChoice = "scissors";
            }
        }
        console.log(getComputerChoice())
           
        

        function getUserChoice(){
                userChoice = prompt("Make a choice bozo").toLowerCase();
                return userChoice;
        }
        console.log(getUserChoice());



        function letsPlay({userChoice}, {computerChoice}){
            console.log(computerChoice);
            if (userChoice === computerChoice){
            return("it's a tie, you both picked " + userChoice + " .The score stands at: Player: " + playerScore + " Computer: " + computerScore);
        }
            else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors")  || (userChoice === "scissors" && computerChoice === "paper")){
                playerScore = playerScore+1;
                return("You win. " + userChoice + " beats " + computerChoice + " .The score stands at: Player: " + playerScore + " Computer: " + computerScore);
            }
            else{
                computerScore = computerScore+1;
                return("you lose. " + userChoice + " loses to " + computerChoice + "The score stands at: Player: " + playerScore + " Computer: " + computerScore);
            }

        } 
        console.log(letsPlay({userChoice}, {computerChoice}));
        
        
    }
    if (playerScore > computerScore){
    
    console.log("YOU WIN! The final scores stand at: Player " + playerScore + " Computer: " + computerScore);
    }
    else if (computerScore > playerScore){
        console.log("YOU LOSE! The final scores stand at: Player " + playerScore + " Computer: " + computerScore);

    }
    else{

        console.log("IT'S A TIE! The final scores stand at: Player " + playerScore + " Computer: " + computerScore);
    }

    }



fiveRounds();






            

