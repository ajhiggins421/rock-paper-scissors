let choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getInput() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice.toLowerCase();
}

function play(computerChoice, playerChoice){
    let winLoseOrTie;
    if(choices.includes(playerChoice)){
        if(computerChoice == playerChoice){
            winLoseOrTie = "tie"
        }

        else if((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice =="rock") 
        || (computerChoice == "scissors" && playerChoice == "paper"))
        {
            winLoseOrTie = "lose";
            compScore++;
        }

        else {
            winLoseOrTie = "win";
            playerScore++;
        }
        return "Computer chooses " + computerChoice + " and you choose " + playerChoice +" so you " + winLoseOrTie;
    }

    else return "Invalid choice";
}

function game(){
    for(let i = 0; i<5; i++){
        let playerChoice = getInput();
        console.log(play(computerPlay(), playerChoice));
    }

    console.log("You: " + playerScore + "\nComputer: " + compScore);

    if(compScore > playerScore) {
        console.log("\nYou lose!");
    }
    if(playerScore > compScore) {
        console.log("\nYou win!");
    }
    else {
        console.log("\nIts a Draw");
    }

    compScore = 0;
    playerScore = 0;
}

game();