// create 2 variables 
let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;

// create variable sum set it to sum of two cards
let sum = firstCard + secondCard;

//  check if hasBlackJack
let hasBlackJack = false;
let isAlive = true;


//check if sum is less than 21
if(sum < 21){
    console.log("Do you want to draw a new card? Your cards are " + firstCard + " and " + secondCard + ". Your current score is " + sum);
    
}
else if(sum === 21){
    console.log("You win! Your cards are " + firstCard + " and " + secondCard + ". Your current score is " + sum);
    hasBlackJack = true;
}
else{
    console.log("You lose! Your cards are " + firstCard + " and " + secondCard + ". Your current score is " + sum);   
}

