const knop = document.getElementById("btnVoegToe");
const container = document.getElementById("myDIV");

knop.addEventListener("click", function() {
    // 1. Maak een p-element aan [cite: 334]
    const nieuweP = document.createElement("p");
    nieuweP.textContent = "Nieuwe paragraaf toegevoegd!";

    // 2. Voeg dit toe aan het div-element [cite: 334]
    container.appendChild(nieuweP);
});