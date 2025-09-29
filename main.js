
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    
    if(random == 1){
        return choice = "Paper!";

    }else if(random == 2){
        return choice = "Rock!";

    }else{
        return choice = "Scissors!";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock - Paper - Scissors").toLowerCase();
    
    if(choice === "rock"){
        return "Rock!";

    }else if(choice === "paper"){
        return "Paper!";

    }else if(choice === "scissors"){
        return "Scissors!";

    }else{
        return "Nothing selected..";
    }
}

let humanScore = 0;
let computerScore = 0;
