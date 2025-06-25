let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    let sum = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + sum
}
function subtract(){
    let sub = num1 - num2
    document.getElementById("sum-el").textContent = "Sum: " + sub
}
function divide(){
    let div = num1 / num2
    document.getElementById("sum-el").textContent = "Sum: " + div
}
function multiply(){
    let mul = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + mul
}