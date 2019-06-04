let input;
let num1 = 0;
let num2;
let symbol;
let resultDisplay = document.getElementsByClassName('result-screen');

function displayText() {
	for (let i = 0; i < resultDisplay.length; i++) {
		resultDisplay[i].innerText = num1;
	}
}

function deleteLastInput() {
	if (num1.length === 1) {
		num1 = 0;
	} else {
		num1 = num1.substr(0, num1.length-1);
	}
}

function calculate(){
	switch(symbol) {
		case "÷":
			num1 = num2/parseInt(num1);
			break;
		case "×":
			num1 = num2*parseInt(num1);
			break;
		case "-":
			num1 = num2-parseInt(num1);
			break;
		case "+":
			num1 = num2+parseInt(num1);
			break;
	}
}

function checkOperationSymbol(symbolInput) {
	switch(symbolInput) {
		case "C":
			num1 = 0;
			num2 = undefined;
			symbol = undefined;
			return false;
			break;
		case "←":
			console.log('deleting last character');
			deleteLastInput();
			return false;
			break;
		case "÷":
			symbol = symbolInput;
			return true;
			break;
		case "×":
			symbol = symbolInput;
			return true;
			break;
		case "-":
			symbol = symbolInput;
			return true;
			break;
		case "+":
			symbol = symbolInput;
			return true;
			break;
		case "=":
			calculate();
			return false;
			break;
	}
}

document.querySelector('.key-container').addEventListener("click", function(event) {
	if (event.target.tagName === "BUTTON") {
		input = event.target.innerText;

		/*  Check to see if input is a number
		 *  if first number inputed, display on screen and assign to num1
		 *  else concatenate input to num1
		 *
		 *  if input is a symbol, check if input is an operation (checkOperationSymbol())
		 *  else either reset everything, deleteLastInput, or calculate
		 */
		if (!isNaN(input)) {
			if (num1 === 0) {
				num1 = input;
				displayText();
			} else {
				num1 = `${num1}${input}`;
				displayText();
			}
		} else {
			if (checkOperationSymbol(input)) {
				num2 = parseInt(num1);
				num1 = 0;
				displayText();

			} else {
				displayText();
			}
		}
		event.stopPropagation();
	}
})