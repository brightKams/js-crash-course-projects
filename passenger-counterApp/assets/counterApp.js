console.log("Hello");

let counter = document.querySelector("#counterTextContent");
// console.log(counter.innerText);
let saveCount = document.querySelector("#saveCount") ;
// console.log(saveCount.innerText);
let previousText = document.querySelector("#saveCountTextContent");
console.log(previousText.innerText);
previousText.style.backgroundColor  = "rgba(255, 255, 255, 0.4";
previousText.style.border  = "1px solid";
previousText.style.minHeight  = "30px";
previousText.style.padding  = "7%";





let count = 0;
console.log(count);
// counter.innerText = count ;


function increment() {
    count ++;
    counter.innerText = count ;
    console.log("Hello This is a button Click👍");
   
}


function save() {
    previousText.innerHTML += ` <style> #saveCountTextContent {display: flex; align-items: center; justify-content: center; flex-flow: row wrap;}</style>  <p style="line-height: 1rem; padding: 0; font-size: 0.8rem; color: blue; font-weight: 800; ")> &nbsp; ${counter.innerText} ` ;

//    console.log(previousText.innerText); 
    counter.innerText = 0;
    count = 0; 
    
}


function clearCount() {
    count = 0;
    counter.innerText = " - -";
    previousText.innerText = "" ;
    
}



