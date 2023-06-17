// This script runs the game rock, paper, scissors for five rounds

/**
 * Make the Computer's play in round of the game
 * @return 'rock', 'paper', or 'scissors'
*/
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*options.length);

    return options[choice];
}

/**
 * Plays Round of the game
 * @param playerSelection
 * @param computerSelection
 * @return 1 if player wins, 2 if the computer wins, or 3 if it is a draw
 */
function playRound(playerSelection, computerSelection) {
    let playerWins; // True if player wins, False if player loses
    let draw = false;; // True if there is a draw
    let decision; // string of round outcome
    let output;

    // Game logic for rock, paper, scissors
    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            output = "Round Won 🙂: Your 🪨 crushed the Computer's ✂️"
            playerWins = true; 
        }
        else if (computerSelection === "rock"){
            output = "Round Draw 🤨: You both chose 🪨"
            draw = true; 
        }
        else if (computerSelection === "paper") {
            output = "Round Lost 😞: Your 🪨 got covered by the Computer's 📜"
            playerWins = false; 
        }
        // Rock crushes lizard
        else if (computerSelection === "lizard") {
            output = "Round Won 🙂: Your 🪨 crushed the Computer's 🦎"
            playerWins = true; 
        }
        // Spock vaporizes rock
        else {
            output = "Round Lost 😞: Your 🪨 got vaporized by the Computer's 🖖"
            playerWins = false; 
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            output = "Round Lost 😞: Your 📜 got cut by the Computer's ✂️"
            playerWins = false; 
        }
        else if (computerSelection === "rock"){
            output = "Round Won 🙂: Your 📜 covered the Computer's 🪨"
            playerWins = true; 
        }
        else if (computerSelection === "paper") {
            output = "Round Draw 🤨: You both chose 📜"
            draw = true; 
        }
        //Lizard eats paper
        else if (computerSelection === "lizard") {
            output = "Round Lost 😞: Your 📜 got eaten by the Computer's 🦎"
            playerWins = false; 
        }
        //Paper Disproves Spock
        else {
            output = "Round Won 🙂: Your 📜 disproved the Computer's 🖖"
            playerWins = true; 
        }
        
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors"){
            output = "Round Draw 🤨: You both chose ✂️"
            draw = true;
        }
        else if (computerSelection === "rock"){
            output = "Round Lost 😞: Your ✂️ got destroyed by the Computer's 🪨"
            playerWins = false;
        }
        else if (computerSelection === "paper") {
            output = "Round Won 🙂: Your ✂️ cut the Computer's 📜"
            playerWins = true; 
        }
        // Spock smashes scissors
        else if (computerSelection === "spock") {
            output = "Round Lost 😞: Your ✂️ got smashed by the Computer's 🖖"
            playerWins = false; 
        }
        // Scissors decapitates lizard
        else {
            output = "Round Won 🙂: Your ✂️ decapitated the Computer's 🦎"
            playerWins = true; 
        }
    }
    //Lizard
    else if (playerSelection === "lizard") {
        //Lizard poisons spock
        if (computerSelection === "spock"){
            output = "Round Won 🙂: Your 🦎 poisoned the Computer's 🖖"
            playerWins = true; 
        }
        // Rock crushed lizard
        else if (computerSelection === "rock") {
            output = "Round Lost 😞: Your 🦎 got crushed by the Computer's 🪨"
            playerWins = false; 
        }
        // Scissors decapitates lizard
        else if (computerSelection === "scissors") {
            output = "Round Lost 😞: Your 🦎 got decapitated by the Computer's ✂️"
            playerWins = false; 
        }
        // Lizard eats paper
        else if (computerSelection === "paper"){
            output = "Round Won 🙂: Your 🦎 ate the Computer's 📜"
            playerWins = true; 
        }
        else {
            output = "Round Draw 🤨: You both chose 🦎"
            draw = true;
        }
    }

    //Spock
    else {
        //spock smashes scissors
        if (computerSelection === "scissors"){
            output = "Round Won 🙂: Your 🖖 smashed the Computer's ✂️"
            playerWins = true; 
        }
        // Lizard poisons spock
        else if (computerSelection === "lizard") {
            output = "Round Lost 😞: Your 🖖 got poisoned by the Computer's 🦎"
            playerWins = false; 
        }
        //Paper Disproves spock
        else if (computerSelection === "paper") {
            output = "Round Lost 😞: Your 🖖 got disproved by the Computer's 📜"
            playerWins = false; 
        }
        //Spock Vaporizes rock
        else if (computerSelection === "rock"){
            output = "Round Won 🙂: Your 🖖 vaporized the Computer's 🪨"
            playerWins = true; 
        }
        else {
            output = "Round Draw 🤨: You both chose 🖖"
            draw = true;
        }

    }


    // update results of round in html
    document.querySelector(".content-results").textContent = output

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
    const rounds = 5; //number of rounds to play the game
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
        decision = playRound(playerSelection, computerSelection);
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
    console.log(`Results: Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`);

    if (winCount > 2){
        console.log("You Win!!!!");
    }
    else if (loseCount > 2){
        console.log("You Lost!!!!");
    }
    else {
        console.log("It's a draw!!!!");
    }
}



function newMain() {
    const rounds = 6; //number of rounds to play the game
    let winCount = 0; // number of wins
    let loseCount = 0; //number of losses
    let drawCount = 0; // number of draws
    let roundsPlayed = 0;

    // Keeps track of scores
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");

    // Set Event Listeners for players choices
    const buttons = document.querySelectorAll(".player-choice");
    buttons.forEach(button => {
        button.addEventListener('click', playerChose);
    })

    buttons.forEach(button => {
        button.addEventListener('transitionend', removeAttribute)
    })

    /**
     * Function is called whenever a player has made a choice on
     * rock, paper, scissors, lizard, or spock
     * @param {*} event 
     */
    function playerChose(event){
        const element = event.target;
        const playerChoice = element.dataset.choice;
        const computerChoice = getComputerChoice();

        element.classList.add('active') //transform on button click

        // Play round and update wins, losses, and draws
        let decision = playRound(playerChoice, computerChoice);
        if (decision === 1){
            playerScore.textContent = parseInt(playerScore.textContent) + 1
            winCount++;
        }
        else if (decision === 2){
            computerScore.textContent = parseInt(computerScore.textContent) + 1
            loseCount++;
        }
        else {
            drawCount++;
        }
        roundsPlayed++;

        if (roundsPlayed === rounds){
            // End game results
            console.log(`Results: Wins: ${winCount}, Losses: ${loseCount}, Draws: ${drawCount}`);
    
            if (winCount > 2){
                console.log("You Win!!!!");
            }
            else if (loseCount > 2){
                console.log("You Lost!!!!");
            }
            else {
                console.log("It's a draw!!!!");
            }
        }
    }

    function removeAttribute(e) {
        if(e.propertyName !== "transform") return
        this.classList.remove('active')
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

newMain();