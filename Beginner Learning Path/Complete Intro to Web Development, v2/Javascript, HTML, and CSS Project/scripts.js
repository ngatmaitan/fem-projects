let input;
let inputDisplay = 0;
let inputHold;
let symbol;

function displayText() {
	let el = document.getElementsByClassName('result-screen');
	for (let i = 0; i < el.length; i++) {
		el[i].innerText = inputDisplay;
	}
}

function deleteLastInput() {
	if (inputDisplay.length === 1) {
		inputDisplay = 0;
	} else {
		inputDisplay = inputDisplay.substr(0, inputDisplay.length-1);
	}
}

function calculate(){
	switch(symbol) {
		case "÷":
			inputDisplay = inputHold/parseInt(inputDisplay);
			break;
		case "×":
			inputDisplay = inputHold*parseInt(inputDisplay);
			break;
		case "-":
			inputDisplay = inputHold-parseInt(inputDisplay);
			break;
		case "+":
			inputDisplay = inputHold+parseInt(inputDisplay);
			break;
	}
}

function checkOperationSymbol(symbolInput) {
	switch(symbolInput) {
		case "C":
			inputDisplay = 0;
			input = undefined;
			inputHold = undefined;
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
		if (!isNaN(input)) {
			if (inputDisplay === 0) {
				inputDisplay = input;
				displayText();
			} else {
				inputDisplay = `${inputDisplay}${input}`;
				displayText();
			}
		} else {
			if (checkOperationSymbol(input)) {
				inputHold = parseInt(inputDisplay);
				inputDisplay = 0;
				displayText();

			} else {
				displayText();
			}
		}
		event.stopPropagation();
	}
})