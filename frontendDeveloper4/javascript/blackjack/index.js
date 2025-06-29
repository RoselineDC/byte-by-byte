// create 2 variables
let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;


// create variable sum set it to sum of two cards
let sum = firstCard + secondCard;

//  check if hasBlackJack
let hasBlackJack = false;
let isAlive = true;
let message = "";
// get start button
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
function startGame() {
  //check if sum is less than 21
  if (sum < 21) {
    message =
      "Do you want to draw a new card? Your cards are " +
      firstCard +
      " and " +
      secondCard +
      ". Your current score is " +
      sum;
  } else if (sum === 21) {
    message =
      "You win! Your cards are " +
      firstCard +
      " and " +
      secondCard +
      ". Your current score is " +
      sum;

    hasBlackJack = true;
  } else {
    message =
      "You lose! Your cards are " +
      firstCard +
      " and " +
      secondCard +
      ". Your current score is " +
      sum;

    isAlive = false;
  }

  sumEl.textContent = "Sum: " + sum;

  messageEl.textContent = message;

  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

  //log out message
  console.log(message);
}
