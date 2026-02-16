function readWeekExpenses() {
    const expenses = [];

    for (let i = 0; i < 7; i++) {
        let value;

        do {
            value = Number(prompt(`Introdu cheltuiala pentru ziua ${i + 1}:`));
        } while (isNaN(value) || value < 0);

        expenses.push(value);
    }

    return expenses;
}

function getExpenseLevel(amount) {
    if (amount < 20) {
        return "mic";
    } else if (amount <= 80) {
        return "mediu";
    } else {
        return "mare";
    }
}

function formatDayReport(dayIndex, amount) {
    const level = getExpenseLevel(amount);
    return `Ziua ${dayIndex + 1}: ${amount} lei (${level})`;
}

function analyzeExpenses(expenses, limit) {

    let total = 0;
    let max = expenses[0];
    let maxIndex = 0;

    for (let i = 0; i < expenses.length; i++) {

        if (expenses[i] > 10000) {
            alert("Valoare suspectă detectată! Analiza oprită.");
            console.log("Analiză întreruptă.");
            break;
        }

        total += expenses[i];

        if (expenses[i] > max) {
            max = expenses[i];
            maxIndex = i;
        }

        if (expenses[i] > limit) {
            alert(`Avertizare: Ziua ${i + 1} depășește limita stabilită!`);
        }
    }

    const medie = total / expenses.length;

    displayReport(expenses, total, medie, maxIndex);
}

function displayReport(expenses, total, medie, maxIndex) {

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        const text = formatDayReport(i, expenses[i]);
        const p = document.createElement("p");
        p.textContent = text;

        if (i === maxIndex) {
            p.style.fontWeight = "bold";
        }

        outputDiv.appendChild(p);
    }

    const summary = document.createElement("p");
    summary.innerHTML = `<strong>Total:</strong> ${total} lei<br>
                         <strong>Medie zilnică:</strong> ${medie.toFixed(2)} lei`;

    outputDiv.appendChild(summary);

    console.log("Total:", total);
    console.log("Medie:", medie);
}

document.getElementById("startBtn")
    .addEventListener("click", function () {

        const limitInput = document.getElementById("limitInput").value;
        const limit = Number(limitInput);

        if (isNaN(limit) || limit < 0) {
            alert("Introduceți o limită zilnică validă!");
            return;
        }

        const expenses = readWeekExpenses();
        analyzeExpenses(expenses, limit);
    });

