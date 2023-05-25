// This script runs the game rock, paper, scissors for five round

/**
 * Make the Computer's play in round of the game
 * @return 'rock', 'paper', or 'scissors'
*/
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random()*options.length)

    return options[choice]
}

/**
 * Plays Round of the game
 * @param playerSelection
 * @param computerSelection
 * @return string declaring the winner of the round
 */
function playerRound(playerSelection, computerSelection) {
    let playerWins; // True if player wins, False if player loses
    let draw = false // True if there is a draw
    let decision; // string of round outcome

    //If player chooses rock
    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            playerWins = true // rock beats scissors
        }
        else if (computerSelection === "rock"){
            draw = true // rock equals rock
        }
        else {
            playerWins = false // paper beats rock
        }
    }
    //If player chooses paper
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            playerWins = false // scissors beats paper
        }
        else if (computerSelection === "rock"){
            playerWins = true // paper beats rock
        }
        else {
            draw = true // paper equals paper
        }
    }
    //If player chooses scissors
    else {
        if (computerSelection === "scissors"){
            draw = true // scissors equals scissors
        }
        else if (computerSelection === "rock"){
            playerWins = false // rock beats scissors
        }
        else {
            playerWins = true // scissors beats paper
        }
    }

    // Check if draw first, then if player won
    if (draw) {
        decision = `There is a draw, both players chose ${playerSelection}`
    }
    else if(playerWins) {
        decision = `Player won, ${playerSelection} beats ${computerSelection}`
    }
    else {
        decision = `Computer won, ${computerSelection} beats ${playerSelection}`
    }

    console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}`)
    return decision
}

/**
 * Main Function to run the game
 */
function main() {
    const playerSelection = "scissors"
    const computerSelection = "scissors"
    console.log(playerRound(playerSelection, computerSelection))
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