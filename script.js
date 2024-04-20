let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
   return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (guess, target) => {
   return Math.abs(guess - target);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
   const user = getAbsoluteDistance(userGuess, targetNumber);
   const computer = getAbsoluteDistance(computerGuess, targetNumber);
   if (user < computer || user === computer) return true;
   else return false;
}

const updateScore = (winner) => {
   if (winner === 'human') humanScore++;
   else computerScore++;   
}

const advanceRound = () => {
   currentRoundNumber++;
}
