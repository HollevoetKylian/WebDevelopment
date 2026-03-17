const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
    // 1. Checkbox: Is roker [cite: 180, 227]
    let isRoker = document.getElementById("isRoker").checked;
    console.log(isRoker ? "is een roker" : "is geen roker");

    // 2. Radiobuttons: Moedertaal [cite: 182, 221, 228]
    let talen = document.getElementsByName("taal");
    let gekozenTaal = "";
    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            gekozenTaal = talen[i].value;
        }
    }
    console.log("moedertaal is " + gekozenTaal);

    // 3. Enkelvoudige select: Favoriete buurland [cite: 192, 199, 229]
    let selectBuurland = document.getElementById("buurland");
    let buurlandText = selectBuurland.options[selectBuurland.selectedIndex].text;
    console.log("favoriete buurland is " + buurlandText);

    // 4. Multi-select: Bestelling [cite: 200, 230]
    let selectBestelling = document.getElementById("bestelling");
    let bestellingResultaat = "bestelling bestaat uit";
    let options = selectBestelling.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            bestellingResultaat += " " + options[i].value;
        }
    }
    console.log(bestellingResultaat);
};

window.addEventListener("load", setup);