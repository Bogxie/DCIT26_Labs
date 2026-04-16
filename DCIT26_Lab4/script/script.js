const display = document.querySelector('.display');
let resetDisplay = false;

display.addEventListener("input", () => {
    display.value = display.value.replace(/[^0-9+\-*/.]/g, '');
});

const buttons = [
    "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", "%", "0", ".", "C", "Del", "="
];

let buttonHTML = "";
buttons.forEach((button) => {
    buttonHTML += `<button class="${button === "=" ? "equals" : ""}">${button}</button>`;
});
document.querySelector('.buttons').innerHTML = buttonHTML;

function handleInput(inputs) {
    if (inputs === 'C') {
        display.value = "0";
        resetDisplay = false;
    } else if (inputs === 'Del') {
        display.value = display.value.slice(0, -1);
        if (display.value === "") display.value = "0";
    } else if (inputs === '=') {
        try {
            let result = eval(display.value);
            if (!isFinite(result)) {
                display.value = "Error";
            } else {
                display.value = result;
                resetDisplay = true;
            }
        } catch {
            display.value = "Error";
        }
    } else {
        const isOperator = ["+", "-", "*", "/", "%"].includes(inputs);

        if (resetDisplay) {
            if (isOperator) {
                resetDisplay = false;
            } else {
                display.value = "";
                resetDisplay = false;
            }
        }

        if (display.value === "0" && !isOperator) {
            display.value = inputs;
        } else {
            display.value += inputs;
        }
    }
}

document.querySelector('.buttons').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    handleInput(e.target.innerText);
});

window.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key === 'Enter') key = '=';
    if (key === 'Escape') key = 'C';
    if (key === 'Backspace') key = 'Del';

    if (buttons.includes(key)) {
        e.preventDefault();
        handleInput(key);
    }
});
