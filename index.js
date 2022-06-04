
function computerPlay(){
    var comp_answers = ['rock', 'paper', 'scissors'];    
    const random = Math.floor(Math.random() * comp_answers.length);
    let comp_answer = comp_answers[random]
    return comp_answer
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log("player: ", player);
    console.log("computer: ", computer);

    if(player === computer){
        console.log('Tie');
        return "It's tie!"
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            console.log('Computer Wins!');
            return "Computer Wins!"
        }else{
            console.log('Player Wins!');
            return "Player Wins!"
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            console.log('Computer Wins!');
            return "Computer Wins!"
        }else{
            console.log('Player Wins!');
            return "Player Wins!"
        }
    } 
    else if(player == 'scissors'){
        if(computer == 'rock'){
            console.log('Computer Wins!');
            return "Computer Wins!"
        }else{
            console.log('Player Wins!');
            return "Player Wins!"
        }
    }
};

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0; i < 5; i++){
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 'Computer Wins!'){
            computerScore++;
        } else if (result == 'Player Wins!'){
            playerScore++;
        }
    }

    if (playerScore > computerScore){
        console.log('Player beats computer!!!');
    } else if (playerScore < computerScore) {
        console.log('Computer beats player!!!');
    } else {
        console.log('It is a tie!!!');
    }
};

const playerSelection = prompt("Choose: Rock, paper or scissors?");
game();