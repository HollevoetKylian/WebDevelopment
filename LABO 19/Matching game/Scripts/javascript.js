let global = {
    AANTAL_HORIZONTAAL: 4,
AANTAL_VERTICAAL: 3,
AANTAL_KAARTEN: 6,
kaarten: ["Images/kaart1.jpg", "Images/kaart2.png", "Images/kaart3.png", "Images/kaart4.png", "Images/kaart5.png", "Images/kaart6.jpg"],
omgedraaideKaarten: [], // Om te vergelijken
    isBusy: false // Blokkeert klikken tijdens animaties
};
const handleCardClick = (event) => {
    let geklikteKaart = event.currentTarget;

    // Check of we mogen klikken
    if (global.isBusy || geklikteKaart.classList.contains("flipped")) return;

    geklikteKaart.src = geklikteKaart.dataset.image; // Toon voorkant
    geklikteKaart.classList.add("flipped");
    global.omgedraaideKaarten.push(geklikteKaart);

    if (global.omgedraaideKaarten.length === 2) {
        checkMatch();
    }
};

const checkMatch = () => {
    global.isBusy = true; // Gebruiker mag even niet klikken
    let [kaart1, kaart2] = global.omgedraaideKaarten;

    if (kaart1.dataset.image === kaart2.dataset.image) {
        // MATCH: Verwijder na korte tijd
        kaart1.classList.add("correct");
        kaart2.classList.add("correct");

        setTimeout(() => {
            kaart1.classList.add("hidden");
            kaart2.classList.add("hidden");
            resetTurn();
        }, 1000);
    } else {
        // GEEN MATCH: Terugdraaien
        kaart1.classList.add("wrong");
        kaart2.classList.add("wrong");

        setTimeout(() => {
            kaart1.src = "images/achterkant.png";
            kaart2.src = "images/achterkant.png";
            kaart1.classList.remove("flipped", "wrong");
            kaart2.classList.remove("flipped", "wrong");
            resetTurn();
        }, 1000);
    }
};

const resetTurn = () => {
    global.omgedraaideKaarten = [];
    global.isBusy = false;
    // Check hier ook of er nog kaarten over zijn voor het einde van het spel
};
window.addEventListener("load", () => {
    const btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", setupGame);
});

const setupGame = () => {
    const playField = document.getElementById("playField");
    playField.innerHTML = ""; // Maak het veld leeg
    global.omgedraaideKaarten = [];
    global.isBusy = false;

    // 1. Maak een lijst met paren (elke kaart 2x)
    let speelkaarten = [...global.kaarten, ...global.kaarten];

    // 2. Schud de kaarten (Fisher-Yates shuffle principe)
    speelkaarten.sort(() => Math.random() - 0.5);

    // 3. Maak de kaart-elementen aan in de HTML
    speelkaarten.forEach((imagePath) => {
        const kaartElement = document.createElement("img");
        kaartElement.src = "images/achterkant.png"; // Start met achterkant
        kaartElement.dataset.image = imagePath;      // Onthoud de echte afbeelding
        kaartElement.classList.add("card");

        kaartElement.addEventListener("click", handleCardClick);
        playField.appendChild(kaartElement);
    });
};