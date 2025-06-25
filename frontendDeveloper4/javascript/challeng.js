// // create two variables, firstName and LastName
// let firstName = "Roseline";
// let lastName = "Dangazela";
// //concatenate the two variables into a third variable
// let fullName = firstName + " " + lastName;
// // log to the cconsole
// console.log(fullName)


// let name = "Linda"
// let greeting = "Hi there"
// //create a function that logs out "Hi there, Linda!" when called
// function greet(){
//     let fullGreet = greeting + "," + " " + name + "!"
//     console.log(fullGreet)
// }
// greet()

// // decrement and increment
// let myPoints = 3
// //create function add3POINTS() 
// function addPoints(){
    
//     myPoints = myPoints + 3
//     console.log(myPoints)
    

    

// }
// //ceate a function that remove 1 point
// function removePoint(){
//     myPoints = myPoints - 1
//     console.log(myPoints)

// }

//     addPoints()
//     addPoints()
//     addPoints()
// removePoint()
// removePoint()

// when the user clicks the button render out
//something went wrong please try again in the next paragraph
//hasthe id="error-el"
let errorEl = document.getElementById("error-el")
errorEl.innerText = "something went wrong please try again"
let nextBtn = document.getElementById("next-btn")

function renderError(){
    console.log("button clicked")
    errorEl.innerText = "something went wrong please try again"
    alert("something went wrong please try again")
}




