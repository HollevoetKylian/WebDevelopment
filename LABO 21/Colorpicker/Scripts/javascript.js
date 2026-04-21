const update = () => {
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    let colorDemos = document.getElementsByClassName("colorDemo");

    if (colorDemos.length > 0) {
        colorDemos[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    // NIEUW: Sla de huidige slider-waarden op
    localStorage.setItem("sliderR", r);
    localStorage.setItem("sliderG", g);
    localStorage.setItem("sliderB", b);
}

// NIEUW: Helper functie om de lijst met opgeslagen kleuren bij te werken in localStorage
const updateStoredPalette = () => {
    const paletteItems = [];
    const boxes = document.querySelectorAll("#palette > div > div:first-child"); // Pak alle gekleurde blokjes
    boxes.forEach(box => {
        paletteItems.push(box.style.backgroundColor);
    });
    localStorage.setItem("savedPalette", JSON.stringify(paletteItems));
}

const saveColor = () => {
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let colorString = `rgb(${r}, ${g}, ${b})`;

    let newBox = document.createElement("div");
    newBox.style.width = "50px";
    newBox.style.height = "50px";
    newBox.style.backgroundColor = colorString;
    newBox.style.border = "1px solid #000";
    newBox.title = colorString;

    document.getElementById("saved-colors").appendChild(newBox);
}

const setup = () => {
    // NIEUW: Herstel de slider waarden uit localStorage
    if(localStorage.getItem("sliderR")) {
        document.getElementById("r").value = localStorage.getItem("sliderR");
        document.getElementById("g").value = localStorage.getItem("sliderG");
        document.getElementById("b").value = localStorage.getItem("sliderB");
    }

    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    document.getElementById("saveBtn").addEventListener("click", saveCurrentColor);

    // NIEUW: Herstel het palet uit localStorage
    const savedPalette = JSON.parse(localStorage.getItem("savedPalette"));
    if (savedPalette) {
        savedPalette.forEach(color => {
            // We gebruiken een kleine truc: we roepen een functie aan die een blokje tekent
            // op basis van de opgeslagen kleur in plaats van de huidige sliders.
            drawSavedColor(color);
        });
    }

    update();
}

// NIEUW: Deze functie is bijna hetzelfde als saveCurrentColor,
// maar accepteert een specifieke kleur (nodig voor het inladen).
const drawSavedColor = (rgbValue) => {
    let container = document.createElement("div");
    container.style.position = "relative";
    container.style.width = "60px";
    container.style.height = "60px";
    container.style.display = "inline-block"; // Zorg dat ze naast elkaar staan
    container.style.margin = "5px";

    let box = document.createElement("div");
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.backgroundColor = rgbValue;
    box.style.border = "1px solid #000";
    box.style.borderRadius = "4px";

    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
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

    closeBtn.addEventListener("click", () => {
        container.remove();
        updateStoredPalette(); // Update storage na verwijderen
    });

    container.appendChild(box);
    container.appendChild(closeBtn);
    document.getElementById("palette").appendChild(container);
}

const saveCurrentColor = () => {
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let rgb = `rgb(${r}, ${g}, ${b})`;

    drawSavedColor(rgb);
    updateStoredPalette(); // Sla de nieuwe lijst op
};

window.addEventListener("load", setup);