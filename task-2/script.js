const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length === 1 || display.value === "Error") {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.value;

        if (!expression) {
            return;
        }

        let result = Function('"use strict"; return (' + expression + ')')();

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        appendValue(key);
    }

    if (key === "Enter" || key === "=") {
        calculate();
    }

    if (key === "Escape") {
        clearDisplay();
    }

    if (key === "Backspace") {
        deleteLast();
    }
});