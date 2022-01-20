// Variables store information



// user input variables

let number1 = Number(prompt("What is the price of your bill?"));

// variables for numbers

let tax = (number1*0.07);
let taxTotal = (tax+number1)
let tip = (taxTotal*0.05);
let totalPrice = (tip+taxTotal);





// writing for numbers

document.body.innerHTML=totalPrice;