let truthOfFalse = Boolean("");

console.log(truthOfFalse);
console.log(Boolean("0"));
console.log(Boolean(100));
console.log(Boolean(null));
console.log(Boolean([0]));
console.log(Boolean(-0));

function greetUser(greeting, name) {
    console.log(`${greeting}, ${name} `)
}

greetUser("Hello", "Per" );
greetUser("Nice to meet you", "Per!" );

// .        Parametesr
let add = (num1, num2) => {
    return console.log(num1 + num2);
}

// . Arguments 
add(3, 4);
add(9, 102);
// ARGUMENTS vs PARAMETERS

/* || Parameters are the values you use as placeholders when writing the function 

while

    || Arguments are the actual value you call together with the functions. 
 
*/

// || ARRAYS AS PARAMETERS

/*  Create a function, getFirst(arr), that returns the first item in the array.

*/

function getFirst(arr) {
    return console.log(arr[0]);
}
let arrays = [3, 2, 8];
getFirst(arrays);



// || USING CHROME API TO GET THE TAB



// TASK 1
/* 
|| 1. GO THROUGH ALL VARIABLES AND DECIDE IF THEY SHOULD BE LET OR CONST

|  2. CHANGE THE CONSOLE LOGS TO USE TEMPLATE STRINGS INSTEAD OF DOUBLE QUOTES

    || SETTING THE STAGE

    let player = "Per";
    let opponent = "Nick";
    let game = "AmazingFighter";
    const points = 0;
    const hasWon = false


    || PLAYING THE GAME

    points += 100;
    hasWon = true;

    || ANNOUNCING THE WINNER
    if (hasWon) {
        console.log(player + " got " + points + " points and won the " + game + " game!")
    } else {
        console.log("The Winner is " + oppponent + "! " + player + "  lost the game")
    }

*/


// || solution

const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";

let points = 0
let hasWon = false;

// || Playing the Game

points += 100;
hasWon = false;

// || Announcing the Winner -
if (hasWon) {
    console.log(`${player} got ${points} points and won  the ${game} game!`);
} else {
    console.log(`The winner is ${opponent}!, ${player} lost the game.`);
}


// TASK 2

/* 
    Create a function that takes a single parameter, an array, and logs all the tems of the array to the console.
    Call the function while passing in myCourses as an argument.

*/

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

let arrayFunction = (arrayList) => {
    for (let i = 0; i < arrayList.length; i++) {
        console.log(arrayList[i]);
    }
}

arrayFunction(myCourses);


//  TASK 3
/* 
    Save a value to localStorage
    Delete your code and refresh the page
    Fetch your value from localStorage and log it out

*/

let arr = ["item1", "item2", "item3", "4", 5];

let savedItem = localStorage.setItem("arr", JSON.stringify(arr))
console.log(savedItem);

let fetchedItem = JSON.parse(localStorage.getItem("arr", (savedItem)))

console.log(fetchedItem);

let deletedItems = localStorage.clear();

console.log(localStorage);

// || TASK 4

/* 
    a. fetch the button from the DOM, store it in a variable
    b. Use addEventListiner() to listen for button clicks.
    c. Log Jane's score when the button is clicked (via data)
*/

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
];

const dataBtnEl = document.querySelector("#data-btn-el");
dataBtnEl.addEventListener("click", printscore)

function printscore() {
    dataBtnEl.innerHTML = `${data[0].score}`;
};

/*  || TASK 5
    1. The generateSentence(desc, arr)
 takes two parameter: a description and an array.
    2. It should return a string based upon the description and array.

    3. Example 1: If you pass in "Largest Countries", and ["China", "India", "USA"],
    4. It should return the string: "The 3 Largest countries are China, India, USA"

    5. Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], It should return:
    The two best fruits are Apples, Bananas"
 
    4. Use both a for loop and a template string to solve th challenge
*/

function generateSentence(desc, arr) {
    let baseString = ` The ${arr.length} ${desc} are `;
    let lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {

        if (i === lastIndex) {
            baseString += arr[i]
           } else {
               baseString += arr[i] + ", "
            }
        }
        return baseString;
    }  
   
let sentence = generateSentence("largest Countries", ["China", " India", " USA"]);
    console.log(sentence);
sentence = generateSentence("best fruits", ["Apples", " Bananas"]);
console.log(sentence);

/* 
    || TASK 6
    1. Create a function that renders the three team images

    2. Use a for loop, template strings (` `), plus equals (+=) and

    3. .innerHTML to solve the problem
*/

const imgs = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let brooklynImages = document.getElementById("brooklyn-images");

function renderImages() {
    let images = "";
    for (let i = 0; i < imgs.length; i++ ) {
        images += `<img class="team-img" src="${imgs[i]}" alt="employee image${i}">`;
    }

    brooklynImages.innerHTML = images;
}

renderImages();


/* 
    || TASK 7
    
*/