
const display = document.querySelector('.display');

display.addEventListener("input", () => {
    display.value = display.value.replace(/[^0-9+\-*/.]/g, '');
})

document.querySelector('.buttons').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    let inputs = e.target.innerText;

    if (inputs === 'C') {
        display.value = "";
    }else if (inputs === '<-'){
        display.value = display.value.slice(0, -1);
    } else if (inputs === '=') {
        try {
            let result = eval(display.value);

            if (!Infinity(result)){
                display.value = "Error"
            }else{
                display.value = result;
            }

        } catch {
            display.value = "Error"
        }
    }else{
        display.value += inputs;
    }
});


