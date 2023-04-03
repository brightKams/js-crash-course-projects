// || TASK -

// 1. Grab the box from the DOM and store it in a variable
//  2. Add a click event listener to the box
//  3. Log out "I want to open the box!" When it is clicked

let box = document.getElementById("box");
console.log(box);
box.addEventListener("click", () => {
    console.log("I want to open the box!");
})


// || USING THE CONST AND LET INITIALIZATION KEY WORDS
// || Which variable below should be changed from let to const?

// || The customer wants to order some stuff. Here are the details:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Whoops! Turns out the shipping will be a bit more complex

shippingCost = 15;
shippingTime = "7 - 14 days";

// || Calculating the full price
let fullPrice = basePrice - discount + shippingCost;

// || Fina;;y, notifying the customer
console.log(`Total cost is ${fullPrice}. It will be arriving in ${shippingTime}`);


// Using Box Element declared from test.JS render a buy button inside the div container -

box.innerHTML = ` <br> <br> <br> <br> <button onclick="thankYou()" > Buy! </button>`


function thankYou() {
    box.innerHTML = `
    <button onclick="closed()" > Close! </button> 
    <p style="position: absolute; bottom:15px; margin: auto;" > Thank You for Buying from Us! </p>`

}

function closed()  {
    box.innerHTML = ` <button onclick="thankYou()" > Buy! </button>`
}