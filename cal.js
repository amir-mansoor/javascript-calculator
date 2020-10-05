class Calculator {
	constructor(previousoperandTextElement,currentOperandTextElement) {
		this.previousoperandTextElement = previousoperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;

	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0,-1);
	}

	appendNumber(number) {
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {
		if(this.currentOperand ==="") return;
		if(this.currentOperand !== "") {
			this.compute;
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if(isNaN(prev) || isNaN(current)) return;

		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "x":
				computation = prev * current;
				break;
			case "/":
				computation = prev / current;
				break;
			default:
				return;
		}

		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = "";
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand;
		this.previousoperandTextElement.innerText = this.previousOperand;
	}
}

const numbers = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const clearData = document.querySelector("[data-delete]");
const previousoperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[ data-current-operand]");
const cal = document.querySelector(".calculator");
console.log(cal)
const calculator = new Calculator(previousoperandTextElement,currentOperandTextElement);
numbers.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

operation.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	});
});

equals.addEventListener("click", () => {
	calculator.compute();
	calculator.updateDisplay();
});

clearData.addEventListener("click", () => {
	calculator.delete();
	calculator.updateDisplay();
});

setTimeout(() => {
	cal.classList.add("popup")
}, 1000)
