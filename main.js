
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
    let choice = prompt("Rock - Paper - Scissors").toLowerCase();
    
    if(choice === "rock"){
        return "Rock";

    }else if(choice === "paper"){
        return "Paper";

    }else if(choice === "scissors"){
        return "Scissors";

    }else{
        return "Nothing selected.";
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Draw!";

    }else if(humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;

    }else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;

    }else if(humanChoice === "Scissors" && computerChoice === "Paper"){
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
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if(humanScore > computerScore){
        return "Final Result: You win the game!";

    }else if(humanScore < computerScore){
        return "Final Result: Computer wins the game!";

    }else{
        return "Final Result: It's a draw!";
    }
}

let humanScore = 0;
let computerScore = 0;

console.log(playGame());
