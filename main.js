let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    
    if(random === 1){
        return "Paper";

    }else if(random === 2){
        return "Rock";

    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    while(true){
    let choice = prompt("Rock - Paper - Scissors").toLowerCase();

    if(choice === "rock"){
        return "Rock";

    }else if(choice === "paper"){
        return "Paper";

    }else if(choice === "scissors"){
        return "Scissors";
    }

        alert("Invalid choice! Please type Rock, Paper, or Scissors.");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Draw!";

    }else if(
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice ===  "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
        
    ){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
        
    }else{
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        let humanPlay = getHumanChoice();
        let computerPlay = getComputerChoice();

        console.log(playRound(humanPlay, computerPlay));
        console.log(`Score: Player ${humanScore} - Computer ${computerScore}`);
    }

    if(humanScore > computerScore){
        return "Final Result: You win the game!";

    }else if(humanScore < computerScore){
        return "Final Result: Computer wins the game!";

    }else{
        return "Final Result: It's a draw!";
    }
}

console.log(playGame());
