
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;//0.45 * 3
    let choice = "";
    
    if(random == 1){
        choice = "Paper!";
    }else if(random == 2){
        choice = "Rock!";
    }else{
        choice = "Scissors!"
    }
    alert(choice);
}

getComputerChoice();
