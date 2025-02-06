let userscore = 0;
let computerscore = 0;  

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user_score"); // Fixed selector
const computerScoreDisplay = document.querySelector("#computer_score"); // Fixed selector

// Function to generate computer's random choice
const gencomputerchoice = () => {
    const Options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return Options[randIdx];
};

// Function to handle a draw
const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "gray"; // Added neutral color for draw
};

// Function to show the winner and update the score
const showWinner = (userwin) => {
    if (userwin) {
        console.log("user wins");
        msg.innerText = "User wins!";
        msg.style.backgroundColor = "green"; // Green for user win
        userscore++;
    } else {
        console.log("computer wins");
        msg.innerText = "Computer wins!";
        msg.style.backgroundColor = "red"; // Red for computer win
        computerscore++;
    }

    // Update score displays
    userScoreDisplay.innerText = `${userscore}`;
    computerScoreDisplay.innerText = `${computerscore}`;
    console.log(`Score -> User: ${userscore} | Computer: ${computerscore}`);
};

// Main function to play the game
const PlayGame = (userchoice) => {
    console.log("user choice =", userchoice);
    const computerchoice = gencomputerchoice();
    console.log("computer choice =", computerchoice);

    if (userchoice === computerchoice) {
        drawgame();
    } else {
        const winningCombinations = {
            rock: "scissors", 
            paper: "rock", 
            scissors: "paper"
        };

        const userwin = winningCombinations[userchoice] === computerchoice;
        showWinner(userwin);
    }
};

// Event listeners for each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        PlayGame(userchoice);
    });
});
