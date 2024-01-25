const playerWins = document.querySelector('#pwc');
const cpuWins = document.querySelector('#cwc');
const tieCount = document.querySelector('#tiecount');
const resultDisplay = document.querySelector('#result');
const reset = document.querySelector('#resetbutton')
const winPercentage = document.querySelector('#playerwin')
const cpuWinPercentage = document.querySelector('#cpuwin')
const rock = document.querySelector ('#rock');
const paper = document.querySelector ('#paper');
const scissors = document.querySelector ('#scissors');

let wins = 0;
let losses = 0;
let ties = 0;
let cpuChoice = "";
let result = "";
let winRatio = 0;
let cpuWinRatio = 0;

const choices = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * 3);

resultDisplay.style.fontWeight = '400';

function counter(){
    if(result === "It's a tie!"){
        tieCount.innerHTML = ties;
    }else if(result === "You win!"){
        playerWins.innerHTML = wins;
    }else{
        cpuWins.innerHTML = losses;
    }
    resultDisplay.innerHTML = `The computer chose ${cpuChoice}!\n ${result}`;
    winRatio = (wins * 100) / (wins + losses + ties);
    winRatio = winRatio.toFixed(2);
    winPercentage.innerHTML = winRatio + '%';
    cpuWinRatio = (losses * 100) / (wins + losses + ties);
    cpuWinRatio = cpuWinRatio.toFixed(2);
    cpuWinPercentage.innerHTML = cpuWinRatio + '%';
}

rock.addEventListener("click", function(e){    //rock button
    cpuChoice = choices[Math.floor(Math.random() * 3)];
    switch(cpuChoice){
        case "rock" :
            ties++;
            result = "It's a tie!"
            break;
        case "paper" :
            losses++;
            result = "You lose!"
            break;
        case "scissors" :
            wins++
            result = "You win!"
            break;
    }
    counter();
});

paper.addEventListener("click", function(e){     //paper button
    cpuChoice = choices[Math.floor(Math.random() * 3)];
    switch(cpuChoice){
        case "paper" :
            ties++;
            result = "It's a tie!"
            break;
        case "scissors" :
            losses++;
            result = "You lose!"
            break;
        case "rock" :
            wins++
            result = "You win!"
            break;
    }
    counter();
});

scissors.addEventListener("click", function(e){      //scissors button
    cpuChoice = choices[Math.floor(Math.random() * 3)];
    switch(cpuChoice){
        case "scissors" :
            ties++;
            result = "It's a tie!"
            break;
        case "rock" :
            losses++;
            result = "You lose!"
            break;
        case "paper" :
            wins++
            result = "You win!"
            break;
    }
    counter();
});

reset.addEventListener("click", function(e){
    if(confirm('Are you sure you want to reset?')){
        tieCount.innerHTML = '-';
        playerWins.innerHTML = '-';
        cpuWins.innerHTML = '-';
        resultDisplay.innerHTML = '-';
        winPercentage.innerHTML = '-';
        cpuWinPercentage.innerHTML = '-';
        wins = 0;
        losses = 0;
        ties = 0;

    }else{}
});