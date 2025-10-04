function getComputerChoice(){
    let randomVal = Math.random()*100;
    let choice;
    
    if(randomVal <= 33){
        choice = "rock";
    }else if(randomVal <= 66){
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


    if(choiceVal == 1){
        humanChoice = "rock";
    }else if(choiceVal == 2){
        humanChoice = "paper";
    }else if(choiceVal == 3){
        humanChoice = "scissors";
    }else{
        console.log("Please enter the correct option!");
    }

    return humanChoice;
}

let humanScore, computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Draw! Both have choosen same");
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore =+ 1;
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Won! Rock beats scissors");
        humanScore =+ 1;
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Won! Paper beats rock");
        humanScore =+ 1;
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! scissors beats paper");
        computerScore =+ 1;
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! rock beats scissors");
        computerScore =+ 1;
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Won! scissors beats paper");
        humanScore =+ 1;
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
    }else if(humanScore == computerScore){
        console.log("Oops! its a tie");
    }
}

playGame();
