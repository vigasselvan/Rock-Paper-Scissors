buttonPressed();

function getComputerChoice(){
    const computerSelection = document.getElementById("computerSelection");
    let randomVal = Math.random()*100;
    let choice;
    
    if(randomVal <= 33){
        choice = "rock";
        computerSelection.src = './img/btn_img/rock_img-removebg-preview.png';
    }else if(randomVal <= 66 && randomVal > 33){
        choice = "paper";
        computerSelection.src = './img/btn_img/paper_img-removebg-preview.png';
    }else{
        choice = "scissors";
        computerSelection.src = './img/btn_img/scissors_img-removebg-preview.png';
    }

    return choice;
}

function getHumanChoice(choiceVal){
    console.log("Choose from the below choices: \n1.Rock \n2.Paper \n3.Scissors");

    const userSelection = document.getElementById("userSelection");

    let humanChoice;
    
        switch(choiceVal){
            case 1: humanChoice = "rock";
                    userSelection.src = './img/btn_img/rock_img-removebg-preview.png';
                    break;
            case 2: humanChoice = "paper";
                    userSelection.src = './img/btn_img/paper_img-removebg-preview.png';
                    break;
            case 3: humanChoice = "scissors";
                    userSelection.src = './img/btn_img/scissors_img-removebg-preview.png';
                    break;
            default: console.log("Please enter the correct option!");
        }
        
    playGame(humanChoice);
}


function buttonPressed(){
    const inputRock = document.getElementById('rock_image');
    const inputPaper = document.getElementById('paper_image');
    const inputScissors = document.getElementById('scissors_image');

        inputRock.addEventListener('click', function(event) {
            console.log('Rock was clicked:', event.target);
            console.log("Clicked Rock!");
            event.preventDefault(); 
            getHumanChoice(1);
        });

        inputPaper.addEventListener('click', function(event) {
            console.log('paper was clicked:', event.target);
            console.log("Clicked Paper!");
            getHumanChoice(2);
        });
    
        inputScissors.addEventListener('click', function(event) {
            console.log('scissors was clicked:', event.target);
            console.log("Clicked Scissors!");
            getHumanChoice(3);
        });

}

let humanScore = 0; 
let computerScore = 0;
let currRound = 0;

function reload(){
    currRound = 0;
    window.location.reload(true);
}

function playRound(humanChoice, computerChoice){
    
    const userCurrScore = document.getElementsByClassName("userScore");
    const computerCurrScore = document.getElementById("compScore");

    console.log("human: " + humanChoice + ", computer: " + computerChoice);

    if(humanChoice == computerChoice){
        console.log("Draw! Both have choosen same");
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Won! Rock beats scissors");
        humanScore++;
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Won! Paper beats rock");
        humanScore++;
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! scissors beats paper");
        computerScore++;
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! rock beats scissors");
        computerScore++;
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Won! scissors beats paper");
        humanScore++;
        console.log("Human Score: " + humanScore + "\nComputer score: " + computerScore);
    }

    //updating score in dashboard
    for(let i = 0; i < userCurrScore.length; i++){
        userCurrScore[i].textContent = `SCORE: ${humanScore}`;
    }
    computerCurrScore.textContent = `SCORE: ${computerScore}`;     

}

function playGame(humanChoice){
    
    const resultSec = document.getElementById("final_result_section");
    const userResult = document.getElementById("user_result");
    const optionSec = document.getElementById('option_section');
    const round = document.getElementById("roundNo");
    const fullRound = document.getElementsByClassName("round");

    if(currRound < 5){
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log(currRound);

    if(currRound >= 5){
        if(humanScore > computerScore){
            console.log("Congradulations, You Won!");
            userResult.textContent = "Congradulations, You Won!🎉";
        }else if(humanScore < computerScore){
            console.log("Sorry, you lost in overall points!");
            userResult.textContent = "Sorry, you lost in overall points!😥";
            userResult.style.color = "#EF233C";
        }else if(humanScore === computerScore){
            console.log("Oops! its a tie");
            userResult.textContent = "Oops! its a tie";
            userResult.style.color = "#FFD670";
        }
        resultSec.style.display = "block";
        optionSec.style.display = "none";
        fullRound[0].style.display = "none";
    }
    
    currRound += 1;
    round.textContent = currRound;
}

// playGame();