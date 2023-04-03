// || CREATE TEO VAEUABLES - 1. An empty array amd 2. An input Variable for the input field

let myLeads = [];
const inputEl = document.querySelector("#input-el");
console.log(inputEl);
const ulEl = document.querySelector("#ul-el");
console.log(ulEl);
const inputBtn = document.querySelector("#save-btn-el");
console.log(inputBtn);
const deleteBtn = document.querySelector("#delete-btn-el");
console.log(deleteBtn);
const tabBtn = document.querySelector("#saveTab-btn-el");
console.log(tabBtn);
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );


  
    // USING EVENT LISTENER
    
    
console.log(Boolean(leadsFromLocalStorage));
// check if leadsFromLoccalStorage is truthy
// If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// || SAVE TAB BTN
tabBtn.addEventListener("click", function(){
        chrome.tabs.query(
            {  active: true, 
               currentWindow: true
            },
    
            function(tabs) {
        console.log(tabs);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);

    })
  
});



// || RENDERING THE THE LEADS ON THE DOM

function render(leads) {
    // ||Creating an Unordered List from the Array =
       /*  for(let i = 0; i < myLeads.length; i++) {
           // ulEl.innerHTML += `<br /> <li> ${myLeads[i]}</li>`;
   
                    // ||OR
           let liEl = document.createElement("li");
           liEl.textContent = myLeads[i];
           liEl.style.marginTop = "10px"
           ulEl.append(liEl);
           console.log(`- ${myLeads[i]}`);
       }
       // inputEl.attributes.value = myLeads;
       */
                   //  ||OR
   
       // || 1. Create a variable, listitems, to hold all the HTML for the list items and Assign it to an empty string to begin with.
      
      let listItems = "";
      
      // || 2. Create a for loop and add items myLeads array to the listitems variable.
      
      for (let i = 0; i < leads.length; i++) {
   //     listItems += "<br /> <li style='list-style-position:inside;'> <a href='  " + leads[i] + " ' target='_blank'>" + leads[i] + "</a> </li>" ;
                   // || OR
       listItems += `
                   <li>
                       <a href="${leads[i]}" target="_blank" >  
                       ${leads[i]}
                       </a> 
                   </li> `;
          
       }
       console.log(listItems);
       // || 3. Render the listItems inside the unordered list using ulEl.innerHTML
       ulEl.innerHTML = listItems;
   }

   inputBtn.addEventListener("click", function () {
       console.log("Button Clicked! from addEventListener");
       // ||Pushing input value to mylead Array -
        myLeads.push(inputEl.value);
        console.log(myLeads);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        
        render(myLeads);
        
    }); 
    
    // || CREATING A DOUBLE CLICK DELETE BUTTON EFFECT 
    //  Listen for double clicks on the delete button
    //  When clicked, clear localStorage, my leads and the DOM
deleteBtn.addEventListener("dblclick", deleteAll);
function deleteAll() {
   
    localStorage.clear();
    console.log( localStorage );
    myLeads = [];
    render(myLeads);
    inputEl.value = "";
    // console.log("double Clicked");

    }


    
 

