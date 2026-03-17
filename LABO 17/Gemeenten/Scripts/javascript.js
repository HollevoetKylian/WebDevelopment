window.onload = function() {
    let gemeenten = [];
    let invoer = "";

    // 1. Vraag de gemeenten op
    while (true) {
        invoer = prompt("Geef een gemeente in (typ 'stop' om te eindigen):");

        // Stop conditie: Annuleren (null) of het woord 'stop'
        if (invoer === null || invoer.toLowerCase() === "stop") {
            break;
        }

        // Alleen toevoegen als het geen lege tekst is
        if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

    // 2. Sorteer de lijst alfabetisch
    gemeenten.sort();

    // 3. Pak de select vast via het ID
    const selectElement = document.getElementById("deKeuzelijst");

    // 4. Maak de select eerst helemaal leeg
    selectElement.innerHTML = "";

    // 5. Maak voor elke gemeente een nieuwe <option> aan
    if (gemeenten.length > 0) {
        for (let i = 0; i < gemeenten.length; i++) {
            let nieuweOptie = document.createElement("option");
            nieuweOptie.value = gemeenten[i];
            nieuweOptie.text = gemeenten[i];

            // Plak de optie IN de select
            selectElement.appendChild(nieuweOptie);
        }
    } else {
        // Als de gebruiker direct op stop drukt
        selectElement.innerHTML = "<option>Geen gemeenten ingegeven</option>";
    }
};