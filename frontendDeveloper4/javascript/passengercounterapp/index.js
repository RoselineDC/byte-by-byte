// make button interactive
  let count = 0;
  let countEl = document.getElementById("count-el");
  let saveBtn = document.getElementById("save-btn"); //save count to local
 let saveEl = document.getElementById("saved-el"); // element to display saved counts
 let welcomeEl = document.getElementById("welcome-el");
function increment() {
    /* initilize count variable */
  
    // listen for click on button with id="increment-btn"
    console.log("Button clicked"); 
    // increment count variable when button is clicked
    count = count + 1
    console.log(count);
    // update count-el in the HTML with the count variable
    countEl.textContent = count;


}
//save count to local storage
function save(e){
    
    let countStr = count + " - "
    // save the count to local storage
   
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;

    console.log(saveEl)
}

// create a welcome 
    let nam =" Roseline Danga";
    let greeting = " welcome back";
    welcomeEl.innerText = greeting + nam;
   welcomeEl.style.color = "green";
   welcomeEl.style.fontSize = "30px";
   welcomeEl.style.textAlign = "center";
   welcomeEl.innerText += "👋";


   

