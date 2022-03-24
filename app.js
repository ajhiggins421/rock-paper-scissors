let choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;

const playerScoreText = document.querySelector("#playerScore");
const compScoreText = document.querySelector("#compScore");
const playerImage = document.querySelector("#playerImage");
const compImage = document.querySelector("#compImage");

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getInput() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice.toLowerCase();
}

function updateImages(compChoice, playerChoice){
    compImage.src = `assets/${compChoice}.png`;
    playerImage.src = `assets/${playerChoice}.png`;

}
function play(computerChoice, playerChoice){
    let winLoseOrTie;
    updateImages(computerChoice, playerChoice);
    if(choices.includes(playerChoice)){

        if(computerChoice == playerChoice){
            winLoseOrTie = "tie"
        }

        else if((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice =="rock") || 
                (computerChoice == "scissors" && playerChoice == "paper")){
            winLoseOrTie = "lose";
            compScoreText.textContent = compScore + 1;
            compScore++;
        }

        else {
            winLoseOrTie = "win";
            playerScoreText.textContent = playerScore +1;
            playerScore++;
        }
    }

}

function game(playerChoice){
    if(compScore == 5 || playerScore ==5) {
        compScore > playerScore ? alert("Computer wins!") : alert("You win!");
        playerScore = 0;
        compScore = 0;
        playerScoreText.textContent = 0;
        compScoreText.textContent = 0;
        playerImage.src = "assets/question-mark.jpg"
        compImage.src = "assets/question-mark.jpg"
    }
    else play(computerPlay(), playerChoice);

}

buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => game(button.id));
});
