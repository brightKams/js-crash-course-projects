// || ARRAYS - ORDERED LISTS OF ITEMS

//  || Example:

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my Portfolio"
]


let experience = ["CEO at TechnoHub", "Frontend developer at The RootHub", "Head of Training"];

// Make the following appear in the console:
// Frontend developer at xeneta
// People counter for Norstat
// CEO at Scrimba

for (let index = 0; index < featuredPosts.length; index++) {
    const mainFeaturedPosts = featuredPosts[index];
    console.log(mainFeaturedPosts);
}

console.log();
console.log();
for (let index = 0; index < experience.length; index++) {
    const mainExperience = experience[index];
    console.log(mainExperience);
}

// || TENARY OPERATOR EXAMPLE -
let firstName = "Bright";
let myName = "Bright" === "Bright" ? true : false ;
console.log(myName);



// || Creating an Array for Cards  and loging it out -

let firstCards = getRandomCard();
let secondCards = getRandomCard();
let thirdCards = getRandomCard();
let fourthCards = getRandomCard();

let cardss = [firstCards, secondCards];
let sums = null;
console.log(cardss);
cardss.push(thirdCards, fourthCards)
console.log(cardss);
for (let index = 0; index < cardss.length; index++) {
    sums += cardss[index] ;
    
    console.log(sums); 
}



// || CREATING RETURNING CARDS IN FUNCTIONS

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
            return player1Time;     
    }

    else if (player2Time < player1Time) {
        return player2Time;

    }

    else {
        player1Time;
    }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace);

function getTotalRaceTime() {
    return    player1Time + player2Time;

}

let totalRaceTime = getTotalRaceTime();
console.log(totalRaceTime);

function getRandomCard() {

    let randomCard = Math.floor(Math.random() * 10) + 1;
   return randomCard  
    
}

console.log(getRandomCard());