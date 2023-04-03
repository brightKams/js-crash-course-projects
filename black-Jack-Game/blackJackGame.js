

let main = document.querySelector("main");
let gameEl = document.querySelector("#game-container-el") 
let allEls = ["#black-jack-message-el", "#cards-and-sum-el", "#cards-el", "sum-el", "#cost-chips-el"];

allEls = document.querySelectorAll(allEls)
console.log(allEls);
let blackJackMessageEl = allEls[0];
let cardsAndSumEl = allEls[1];
let cardsEl = allEls[2];
let sumEl = document.querySelector("#sum-el");
let costChipsEl = allEls[3];
let newCardBtn = document.querySelector("#new-card-btn");
console.log(newCardBtn.innerText);
console.log(sumEl);



console.log(blackJackMessageEl, cardsAndSumEl, costChipsEl);
// 1. create a  Variable, first card and second card.
// Set their values to a random number between 2-11


let hasBlackJack = false;
let isAlive = true;
let message = " ";
let blackJackMessages = "You have BlackJack to play a Game!"

// 2. Create a variable, sum, and set it to the sum of the two cards


let sum = 0;

// console.log(firstCard);
// console.log(secondCard);
// console.log(sum);

// 3. Use the if...else conditions to return " DO YOU WANT TO DRAW AGAIN?" when the sum is "< 21", return "YOU'VE GOT BLACKJACK" when the sum is  "=== 21" & finally return "OOPS YOU ARE OUT OF THE GAME" if the sum is "> 21".


// An Array List of card Numbers
let cards = [];
let cardArray = [cards];
let endGameArray = [];
let closedGameArray = []
console.log(cards);

// ||CODE GENERATING TIME
let currentTimeDate = new Date();
let hours = currentTimeDate.getHours();
hours = hours < 10 ? "0" + hours : hours;

let minutes = currentTimeDate.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

let seconds = currentTimeDate.getSeconds();
seconds = seconds < 10 ? "0" + seconds : seconds;

let time = `${hours}:hrs ${minutes}:mins ${seconds}secs`;



// || CREATE A RANDORM CARD

function getRandomCard() {

    let randomCard = Math.floor(Math.random() * 10) + 1;
   
   if (randomCard >= 10) {
        return 10;
   }
   else if (randomCard === 1) {
    return 11;
   }
   else {
    return randomCard;
   }  
    
}

// ||Create a new element for all the appended paragraphs

let newEl = document.createElement("p");
newEl.className = "newElement"


// ||START GAME FUNCTION

let startGame = function () {

    if (isAlive === true && hasBlackJack === false) {
        
    }
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    if (sum <= 21) {
        
        renderGame();
        newCardBtn.style.display = "revert"
    }

    else {
        renderGame();
    }
}



let renderGame = function () {

    
    if (sum < 21) {
        message ="Hey, Do you want to draw a new Game?";
     
    }
    
    else if (sum === 21) {
        message = "Congrats! You've got a blackJack and you can win more by playing again!";
        hasBlackJack = true;
    } else {
        message = "OOPS! You're out of the Game" 
        isAlive === false;
        // hasBlackJack = false;
        clearCard();
        endGame();
        document.querySelector("#new-card-btn").style.display = "none";
        document.querySelector("#end-game-btn").style.display = "none";

        
    }


    if (!hasBlackJack && isAlive === false) {
        blackJackMessages = "sorry, you do not have blackjack yet";        
    }

    else {
        blackJackMessages = "You have a BlackJack";
    }

    blackJackMessageEl.textContent = message;

    console.log(`Your blackJack status is ${hasBlackJack.valueOf()}! ${message}`);

    console.log(cards);

    
    cardsEl.textContent = `Cards: ${cards} ` ;
    // console.log(cardsEl.textContent);

    // || OR

    // for (let index = 0; index < cards.length; index++) {
    //     cardsEl.textContent += `${cards[index]},`;
        
    // }
    console.log(cardsEl.textContent);


    
    sumEl.textContent =`Sum: ${sum}`;
    console.log(sumEl.textContent);
    console.log(message);
    console.log(sum);

    
    

};

// startGame();
 



function newCard() {
    // blackJackMessageEl.textContent = "Want to Play a Game!";

    if (isAlive === true && hasBlackJack === false) {
        
        let anotherCard = getRandomCard();
        
        console.log(anotherCard);
    // let newSum = firstCard + secondCard
    sum = sum + anotherCard;
    console.log(sum);
    // sumEl.textContent = sum;
    console.log(sumEl.textContent);
    
    // sum = newSum;
    
    // cards.push(anotherCard);
    console.log(cards);
    cards.push(` ${anotherCard}`);
    cardsEl.textContent += ` ${anotherCard}`;
    console.log(cards);
    console.log(cardArray);
    
    renderGame();
}



}



function endGame() {
    blackJackMessageEl.textContent = "Want to Play a Game!";
    
    
    endGameArray.push(cards);
    console.log(endGameArray);
    cardsEl.textContent = "Cards: " + endGameArray;
    sumEl.textContent = "Sum: " + sum;
    
    // let endGameMessage = `Hello, your games closed at ${time} with a the following cards: ${endGameArray} `;



   let endGameMessage = ` Hello! your games closed " on <strong style="font-size: 2rem;"> ${new Date()} </strong> with the following cards: ${endGameArray}. `
    console.log( endGameMessage );
    console.log(currentTimeDate.getFullYear());

    let main = document.querySelector("main");

    console.log(main);
    
    newEl.innerHTML = `${endGameMessage} <br /> <br />`;

    gameEl.appendChild(newEl);
    
    
}

function clearCard() {
    blackJackMessageEl.textContent = "Want to Play a Game!";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    

    
    closedGameArray.push(cards);

    
    let closedGameMessage = `Hello! Games Closed at ${time} with the following cards: ${closedGameArray}. `;

    

    console.log(main);
    
    newEl.innerHTML = `${closedGameMessage} <br /> <br />`;

    gameEl.appendChild(newEl);

}

function allClearCard() {
    blackJackMessageEl.textContent = "Want to Play a Game!";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    newEl.innerHTML = "";

}

// function restartGame() {
//     cardsEl.textContent = "Cards: "
//     sumEl.textContent = "Sum: "
// }

// 4. Checking the state of the player 

// console.log(hasBlackJack);