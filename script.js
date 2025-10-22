function getComputerChoice(){
    let randomVal = Math.random()*100;
    let choice;
    
    if(randomVal <= 33){
        choice = "rock";
    }else if(randomVal <= 66 && randomVal > 33){
        choice = "paper";
    }else{
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice(){
    console.log("Choose from the below choices: \n1.Rock \n2.Paper \n3.Scissors")

    let choiceVal = Number(prompt("Enter number: "));
    let humanChoice;

    switch(choiceVal){
        case 1: humanChoice = "rock";
                break;
        case 2: humanChoice = "paper";
                break;
        case 3: humanChoice = "scissors";
                break;
        default: console.log("Please enter the correct option!");
    }

    return humanChoice;
}

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice){
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
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log("Congradulations, You Won!");
    }else if(humanScore < computerScore){
        console.log("Sorry, you lost in overall points!");
    }else if(humanScore === computerScore){
        console.log("Oops! its a tie");
    }
}

// playGame();
