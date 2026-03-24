const update = () => {
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    let colorDemos = document.getElementsByClassName("colorDemo");

    // Pas de kleur aan van de bovenste demo box
    if (colorDemos.length > 0) {
        colorDemos[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

const saveColor = () => {
    // 1. Haal de huidige kleurwaarden op
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let colorString = `rgb(${r}, ${g}, ${b})`;

    // 2. Maak een nieuw vierkantje aan
    let newBox = document.createElement("div");
    newBox.style.width = "50px";
    newBox.style.height = "50px";
    newBox.style.backgroundColor = colorString;
    newBox.style.border = "1px solid #000";
    newBox.title = colorString; // Toont de RGB waarde als je erover hoovert

    // 3. Voeg het vierkantje toe aan de container
    document.getElementById("saved-colors").appendChild(newBox);
}

const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    // Voeg de klik-functie toe aan de opslaan knop
    document.getElementById("saveBtn").addEventListener("click", saveColor);

    update();
}
const saveCurrentColor = () => {
    // 1. Waarden ophalen
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let rgb = `rgb(${r}, ${g}, ${b})`;

    // 2. Container maken voor het kleurblokje + kruisje
    let container = document.createElement("div");
    container.style.position = "relative"; // Nodig om het kruisje te positioneren
    container.style.width = "60px";
    container.style.height = "60px";

    // 3. Het gekleurde blokje zelf
    let box = document.createElement("div");
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.backgroundColor = rgb;
    box.style.border = "1px solid #000";
    box.style.borderRadius = "4px";

    // 4. Het kruisje (Verwijder-knop)
    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;"; // Dit is het 'X' symbool
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "-8px";
    closeBtn.style.right = "-8px";
    closeBtn.style.backgroundColor = "red";
    closeBtn.style.color = "white";
    closeBtn.style.width = "18px";
    closeBtn.style.height = "18px";
    closeBtn.style.borderRadius = "50%";
    closeBtn.style.display = "flex";
    closeBtn.style.alignItems = "center";
    closeBtn.style.justifyContent = "center";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "14px";
    closeBtn.style.fontWeight = "bold";

    // 5. De verwijder-logica
    closeBtn.addEventListener("click", () => {
        container.remove();
    });

    // Alles in elkaar zetten en toevoegen aan het palette
    container.appendChild(box);
    container.appendChild(closeBtn);
    document.getElementById("palette").appendChild(container);
};

// Zorg dat de knop gelinkt blijft
window.addEventListener("load", () => {
    // Check even of de listener er niet al dubbel op staat
    const btn = document.getElementById("saveBtn");
    btn.onclick = saveCurrentColor;
});

window.addEventListener("load", setup);