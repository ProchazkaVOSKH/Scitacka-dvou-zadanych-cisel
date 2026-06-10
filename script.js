// Získání referencí na HTML prvky podle jejich ID.
const tbxCislo1 = document.getElementById("operand1");
const tbxCislo2 = document.getElementById("operand2");
const tbxVysledek = document.getElementById("result");
const btnSoucet = document.getElementById("pocitej");
const obsahStranky = document.body;

// Nastavení výchozí barvy pozadí stránky.
obsahStranky.style.backgroundColor = "#ADD8E6";

// Funkce pro sečtení dvou čísel zadaných uživatelem.
function secti() {
    // Převod hodnot z textových polí na čísla.
    let cislo1 = Number(tbxCislo1.value);
    let cislo2 = Number(tbxCislo2.value);
    // Výpočet součtu.
    let vysledek = cislo1 + cislo2;
    // Zobrazení výsledku v textovém poli.
    tbxVysledek.value = vysledek;

    // Podmínka pro změnu barvy pozadí a obrázku podle výsledku.
    if (vysledek >= 0) {
        obsahStranky.style.backgroundColor = "green"; // Zelené pozadí pro kladný výsledek.
    } else {
        obsahStranky.style.backgroundColor = "red"; // Červené pozadí pro záporný výsledek.
    }
}

// Přiřazení funkce secti k události kliknutí na tlačítko.
btnSoucet.onclick = secti;
// Přiřazení funkce secti k události kliknutí na textové pole výsledku.
tbxVysledek.onclick = secti;