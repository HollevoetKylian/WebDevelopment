const setup = () => {
    const maakMetSpaties = (inputText) => {
        let result = "";
        for (let i = 0; i < inputText.length; i++) {
            result += inputText[i] + " ";
        }
        return result.trim();
    };

    const verwerkTekst = (event) => {
        // Voorkom dat de pagina ververst
        event.preventDefault();

        // Pak de .value van het element
        const invoerElement = document.getElementById("userInvoer");
        const tekst = invoerElement.value;

        const resultaat = maakMetSpaties(tekst);

        console.log("Resultaat:", resultaat);
        document.getElementById("output").innerText = resultaat;
    };

    // Koppel de functie aan het formulier (submit event)
    const form = document.getElementById("form");
    form.addEventListener("submit", verwerkTekst);
}

window.addEventListener("load", setup);