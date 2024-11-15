document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "bisque";


const calculator = document.querySelector('.calculator');
        
calculator.style.padding = "10px";
calculator.style.borderRadius = "20px";
calculator.style.textAlign = "center";
calculator.style.width = "200px";


const inputs = document.querySelectorAll(".num");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.width = "80%";
    inputs[i].style.padding = "10px";
    inputs[i].style.margin = "10px";
    inputs[i].style.borderRadius = "5px";
}

const buttons = document.querySelectorAll(".button-group");


const resultDisplay = document.querySelector(".result");
resultDisplay.style.marginTop = "10px";
resultDisplay.style.fontSize = "30px";

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b === 0 ? "Sifira bolmek olmaz" : a / b
};

function calculate(operation) {
    const num1 = parseFloat(inputs[0].value);
    const num2 = parseFloat(inputs[1].value);
    const result = operations[operation](num1, num2);
    resultDisplay.textContent =result;
}

document.querySelector(".add").addEventListener("click", function() { calculate('add'); });
document.querySelector(".subtract").addEventListener("click", function() { calculate('subtract'); });
document.querySelector(".multiply").addEventListener("click", function() { calculate('multiply'); });
document.querySelector(".divide").addEventListener("click", function() { calculate('divide'); });

