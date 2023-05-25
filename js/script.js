// This script runs the game rock, paper, scissors for five round

/**
 * Make the Computer's play in round of the game
 * @return 'rock', 'paper', or 'scissors'
*/
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*options.length);

    return options[choice]
}

/**
 * Plays Round of the game
 * @param playerSelection
 * @param computerSelection
 * @return 1 if player wins, 2 if the computer wins, or 3 if it is a draw
 */
function playerRound(playerSelection, computerSelection) {
    let playerWins; // True if player wins, False if player loses
    let draw = false;; // True if there is a draw
    let decision; // string of round outcome

    //If player chooses rock
    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            playerWins = true; // rock beats scissors
        }
        else if (computerSelection === "rock"){
            draw = true; // rock equals rock
        }
        else {
            playerWins = false; // paper beats rock
        }
    }
    //If player chooses paper
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            playerWins = false; // scissors beats paper
        }
        else if (computerSelection === "rock"){
            playerWins = true; // paper beats rock
        }
        else {
            draw = true; // paper equals paper
        }
    }
    //If player chooses scissors
    else {
        if (computerSelection === "scissors"){
            draw = true; // scissors equals scissors
        }
        else if (computerSelection === "rock"){
            playerWins = false; // rock beats scissors
        }
        else {
            playerWins = true; // scissors beats paper
        }
    }

    // Check if draw first, then if player won
    if (draw) {
        decision = 3;
        console.log(`There is a draw, both players chose ${playerSelection}`);
    }
    else if(playerWins) {
        decision = 1;
        console.log(`Player won, ${playerSelection} beats ${computerSelection}`);
    }
    else {
        decision = 2;
        console.log(`Computer won, ${computerSelection} beats ${playerSelection}`);
    }

    console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}`);
    return decision;
}

/**
 * Main Function to run the game
 */
function main() {
    const rounds = 5;
    let winCount = 0; // number of wins
    let loseCount = 0; //number of losses
    let drawCount = 0; // number of draws

    // Play the game for number of rounds, logging the outcome
    for (let i = 0; i < rounds; i++) {
        let playerSelection;
        let computerSelection = getComputerChoice();
        let invalid = true;
        let decision;

        while (invalid){
            playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'");

            if (playerSelection){
                playerSelection = playerSelection.toLowerCase();
            }

            if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
                invalid = false;
            }
            else {
                alert('Entered wrong value. Try again');
            }
        }
        
        // Play round and update wins, losses, and draws
        decision = playerRound(playerSelection, computerSelection);
        if (decision === 1){
            winCount++;
        }
        else if (decision === 2){
            loseCount++;
        }
        else {
            drawCount++;
        }
    }

    // End game results
    console.log(`Results: Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`)

    if (winCount > 2){
        console.log("You Win!!!!")
    }
    else if (loseCount > 2){
        console.log("You Lost!!!!")
    }
    else {
        console.log("It's a draw!!!!")
    }
}

/**
 * Used to test out the code
 */
function test() {
    // Test Computer Choice by making sure all options have been seen
    // Test Player Round by testing all scenarios in a round
    // Test game by making sure player chooses a valid option

}

main()