# Rock-Paper-Scissors
Rock Paper Scissors game built using Vanilla JS.

Steps to play the game:
1. Game is [Live](https://vigasselvan.github.io/Rock-Paper-Scissors/).
2. You are given 3 choices: select your option for current round, for winning each round, +1 point. 
3. After 5 Rounds, Result of yours will be shown.
4. Choose "Play again" button at bottom to restart the game.

>[!NOTE]
> Rock Wins Scissors, Paper Wins Rock and Scissors Wins Paper.

Issues and Learnings:
1. Multiple event handlers in a function and calling that funtion multiple times leads to leaving many undeleted event handlers.Here when an event happens once, all the event handler executes. Therefore, removed the event handlers and replaced them with event.target.id to find where the event happened and gave seperate function for each.
