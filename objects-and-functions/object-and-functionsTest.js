console.log("Hello!!!");


// || TASK -

// || 1. Create a person object that contains three keys: name, age, and county.

// || 2. Use yourself as an example to set the values for name, age, and country

// || 3. Create A function,logData(), that uses the person object to create a string in the following format:
// || - "Per is 35 years Old and lives in Norway"

// || 4. Call the logData() function to verify that it works.

// || SOLUTIONS -

let person = {
    name: "Bright",
    age: 10,
    country: "Nigeria"
}

function logData() {
   console.log(person.name + " is " + person.age + " years old and lives in " + person.country); 
}

logData();

let passengerAge = () => {
    let generatedAge = Math.floor( Math.random() * 100 ) + 1;
    console.log(generatedAge);
    return generatedAge;
};
// passengerAge();

let passengers = {
    age: passengerAge()
};

let printOutPrice = () => {
    if (passengers.age < 6) {
        console.log("FREE");
    } else if 
    (passengers.age >= 6 && passengers.age <= 17) {
        console.log("CHILD DISCOUNT");
    } else if 
    (passengers.age >= 18 && passengers.age <= 26) {
        console.log("STUDENT DISCOUNT");
    } else if 
    (passengers.age >= 27 && passengers.age <= 66) {
        console.log("FULL PRICE");
    } else {
        console.log("SENIOR CITIZEN DISCOUNT");
    } 
    
};


console.log(passengers);
printOutPrice();


let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* || USe the for loop to log the following countries to the console:

The 5 Largest countries in the world:
- Chine, - India, - United States, - Indonesia, - Pakistan
 */

console.log();

for (let i = 0; i < largeCountries.length; i ++) {
    const countries = `- ${largeCountries[i]}`;

    console.log(countries);
}


// USING THE PUSH, POP, UNSHIFT & SHIFT ARRAY METHODS

largeCountries  = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largecountries array so that China and Pakistan aare added back into their respective places.


// || USE Push() & Pop() and their counterparts unshift() & shift()

// || Google how to use unshift() and shift();

// || REMOVING AT THE END AND FROM THE BEGINNING OF AN ARRAY
largeCountries.pop(largeCountries[largeCountries.length]);
console.log(largeCountries);

largeCountries.shift();
console.log(largeCountries);



// ||ADDING AT THE END AND AT THE BEGINNING OF AN ARRAY
largeCountries.push("Pakistan");
console.log(largeCountries);

largeCountries.unshift("China");
console.log(largeCountries);

console.log();
// || Sorting Fruits 
let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = [];
let orangeShelf = [];

function sortFruit() {
    
    for (i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.push(fruit[i]);
        } else {
            orangeShelf.push(fruit[i]);
        }
    }
    console.log(appleShelf);
    console.log(orangeShelf);
}


sortFruit();