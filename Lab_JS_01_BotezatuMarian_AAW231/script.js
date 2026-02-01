
const APP_NAME = "AsistentJS";
let mesajGlobal = "Sunt global";



/**
 * 
 * @param {string} mesaj
 * @returns {string}
 */
function citesteText(mesaj) {
    let text = prompt(mesaj);
    return text === null ? "" : text;
}

/**
 * 
 * @param {string} mesaj
 * @returns {number}
 */
function citesteNumar(mesaj) {
    let numar;
    do {
        numar = Number(prompt(mesaj));
    } while (isNaN(numar));
    return numar;
}

/**
 * 
 * @param {string} text
 */
function afiseazaInPagina(text) {
    const div = document.getElementById("rezultat");
    const p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);
}


function curataRezultate() {
    document.getElementById("rezultat").innerHTML = "";
}




function verificareVarsta() {
    let mesajGlobal = "Sunt local";
    console.log("Global:", window.mesajGlobal);
    console.log("Local:", mesajGlobal);

    const varsta = citesteNumar("Introdu vârsta:");
    let mesaj;

    if (varsta < 18) {
        mesaj = "Ești minor.";
    } else {
        mesaj = "Ești major.";
    }

    alert(mesaj);
    console.log(mesaj);
    afiseazaInPagina(mesaj);
}


function tablaInmultirii() {
    curataRezultate();
    const n = citesteNumar("Introdu un număr pentru tabla înmulțirii:");

    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
            continue;
        }

        const rezultat = `${n} x ${i} = ${n * i}`;
        console.log(rezultat);
        afiseazaInPagina(rezultat);
    }
}


function calculator3Numere() {
    curataRezultate();

    const a = citesteNumar("Introdu primul număr:");
    const b = citesteNumar("Introdu al doilea număr:");
    const c = citesteNumar("Introdu al treilea număr:");

    const suma = a + b + c;
    const medie = suma / 3;
    const max = Math.max(a, b, c);

    alert(`Suma: ${suma}`);
    console.log("Rezultate calculator:", suma, medie, max);

    afiseazaInPagina(`Suma: ${suma}`);
    afiseazaInPagina(`Media: ${medie}`);
    afiseazaInPagina(`Maximul: ${max}`);
}


function jocGhicit() {
    curataRezultate();

    const numarSecret = Math.floor(Math.random() * 20) + 1;
    let castigat = false;
    let incercari = 0;

    for (let i = 1; i <= 5; i++) {
        const ghicire = citesteNumar(`Încercarea ${i}/5. Ghicește numărul (1-20):`);
        incercari++;

        if (ghicire < numarSecret) {
            alert("Prea mic!");
        } else if (ghicire > numarSecret) {
            alert("Prea mare!");
        } else {
            alert("Bravo! Ai ghicit!");
            castigat = true;
            break;
        }
    }

    if (!castigat) {
        alert(`Ai pierdut! Numărul era ${numarSecret}`);
    }

    afiseazaInPagina(`Încercări folosite: ${incercari}`);
    afiseazaInPagina(castigat ? "Ai câștigat 🎉" : "Ai pierdut ❌");
}


function pornesteAplicatia() {
    alert(`Bine ai venit în ${APP_NAME}!`);

    const nume = citesteText("Introdu numele tău:");
    console.log("Utilizator:", nume);

    while (true) {
        const optiune = citesteText(
            "Alege opțiunea:\n" +
            "1 – Verificare vârstă\n" +
            "2 – Tabla înmulțirii\n" +
            "3 – Calculator (sumă, medie, max)\n" +
            "4 – Joc: ghicește numărul\n" +
            "0 – Ieșire"
        );

        switch (optiune) {
            case "1":
                verificareVarsta();
                break;
            case "2":
                tablaInmultirii();
                break;
            case "3":
                calculator3Numere();
                break;
            case "4":
                jocGhicit();
                break;
            case "0":
                alert("La revedere!");
                return;
            default:
                alert("Opțiune invalidă!");
        }
    }
}


document.getElementById("startBtn")
    .addEventListener("click", pornesteAplicatia);
