const choices = ["rock", "paper", "scissors"];

let playerWins = 0;
let cpuWins = 0;
let ties = 0;
let rounds = 0;

game();

function playRound(){

    const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase(); //makes it case insensitive

    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    rounds++;


    if(playerChoice === cpuChoice){
        result = "It's a tie!"
        ties++;

    }else{
        switch(playerChoice){
            case "rock":
                result = (cpuChoice === "scissors") ? "You win!" : "You lose!";
                if(result === "You win!"){
                    playerWins++;
                    return(result);
                }else{
                    cpuWins++;
                    return(result);
                }
                

            case "scissors":
                result = (cpuChoice === "paper") ? "You win!" : "You lose!";
                if(result === "You win!"){
                    playerWins++;
                    return(result);
                }else{
                    cpuWins++;
                    return(result);
                }
            

            case "paper":
                result = (cpuChoice === "rock") ? "You win!" : "You lose!"
                if(result === "You win!"){
                    playerWins++;
                    return(result);
                } else{
                    cpuWins++;
                    return(result);
                }
        }   
    }
}

function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    return(`Player wins: ${playerWins}\nComputer wins: ${cpuWins}\nTies: ${ties}`);
}