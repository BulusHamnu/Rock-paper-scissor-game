
let wins = 0;
let losses = 0;
let draws = 0;
let playerChoice = '';
let computerChoice = '';

const Rock = document.getElementById("Rockbtn")
const Paper = document.getElementById("Paperbtn")
const Scissor = document.getElementById("Scissorbtn")
const choiceDisplay = document.getElementById("choiceDisplay")
const playerFate = document.getElementById("playerFate");


const Wnum = document.getElementById("Wnum");
const Lnum = document.getElementById("Lnum");
const Dnum = document.getElementById("Dnum");

function comPlay () {
    Cchoice = Math.floor(Math.random() * 3) + 1;
    if (Cchoice == 1) {
        computerChoice = "Rock";
    } else if (comPlay == 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
}
return computerChoice;
}

function play (playerChoice) {
    let computerChoice = comPlay()
    if (playerChoice === computerChoice) {
        draws++;
        choiceDisplay.innerHTML = `You pick ${playerChoice}, computer picked ${computerChoice}`;
        Dnum.innerHTML = draws;
    } else if ((playerChoice === "Rock" && computerChoice === "Scissor") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissor" && computerChoice === "Paper")) {        
            wins++;
            choiceDisplay.innerHTML = `You pick ${playerChoice}, computer picked ${computerChoice}`;
            playerFate.innerHTML = 'You Win!'
            Wnum.innerHTML = wins;
        } else {
            losses++;
            choiceDisplay.innerHTML = `You pick ${playerChoice}, computer picked ${computerChoice}`;
            playerFate.innerHTML = 'You Lose!';
            Lnum.innerHTML = losses;
        }
}

function resetScore() {
    wins = 0;
    losses = 0;
    draws = 0;
    Wnum.innerHTML = "0"
    Lnum.innerHTML = "0"
    Dnum.innerHTML = "0"
    playerChoice = '';
    computerChoice = '';
}
