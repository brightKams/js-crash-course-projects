let allCalcs = ["#input-text-el1", "#input-text-el2", "#add-el", "#subtract-el", "#divide-el", "#multiply-el", "#clear-calc-el", "#reload-calc-el", "#sum-paragraph-el" ];
allCalcs = document.querySelectorAll(allCalcs);
console.log(allCalcs);

let inputTextEl1 = allCalcs[0]
let inputTextEl2 = allCalcs[1]
let addEl = allCalcs[2];
let subtractEl = allCalcs[3];
let divideEl = allCalcs[4];
let multiplyEl = allCalcs[5];
let clearCalcEl = allCalcs[6];
let reloadCalcEl = allCalcs[7];
let sumParagraph = allCalcs[8];

// console.log(addEl.innerText);
// console.log(subtractEl.innerText );
// console.log(divideEl.innerText);
// console.log(multiplyEl.innerText);
console.log(inputTextEl1.textContent);
console.log(inputTextEl2.textContent);

let num1 = Number.parseInt(prompt("Please Enter first number Here:"));
let num2 = Number.parseInt(prompt("Please Enter second number Here:"));


inputTextEl1.textContent = num1;
inputTextEl2.textContent = num2;



// console.log(num1, + ", " + num2) ;
function add() {
   let result = num1 + num2;
   sumParagraph.innerText = "Sum: " + result
   
}
function subtract() {
   let result = num1 - num2;
   sumParagraph.innerText = "Sum: " + result
   
}
function divide() {
   let result = num1 / num2;
   sumParagraph.innerText = "Sum: " + result
   
}
function multiply() {
   let result = num1 * num2;
   sumParagraph.innerText = "Sum: " + result
   
}

function clearCalc() {
   sumParagraph.innerText = "Sum: "
   num1 = " ";
   num2 = " ";
   inputTextEl1.textContent = " ";
   inputTextEl2.textContent = " ";
}

function reloadCalc() {
   window.Location = "index.html"
}
