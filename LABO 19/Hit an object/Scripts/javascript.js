let global = {
    IMAGE_COUNT: 5,               // Aantal verschillende figuren [cite: 113]
    IMAGE_SIZE: 48,              // Grootte van de figuur [cite: 114]
    IMAGE_PATH_PREFIX: "images/", // Map van de figuren [cite: 115]
    IMAGE_PATH_SUFFIX: ".png",    // Extensie [cite: 116]
    MOVE_DELAY: 1000,             // Elke seconde verspringen (1000ms) [cite: 100, 117]
    score: 0,                     // Aantal hits [cite: 118]
    timeoutId: 0                  // Om de timer te kunnen stoppen [cite: 119]
};
const moveObject = () => {
    const img = document.getElementById("target");
    const playField = document.getElementById("playField");

    // Bereken willekeurige positie binnen de grenzen [cite: 120]
    let maxX = playField.clientWidth - global.IMAGE_SIZE;
    let maxY = playField.clientHeight - global.IMAGE_SIZE;

    let left = Math.floor(Math.random() * maxX);
    let top = Math.floor(Math.random() * maxY);

    img.style.left = left + "px";
    img.style.top = top + "px";

    // Kies een willekeurige nieuwe afbeelding [cite: 124]
    let randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    img.src = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
};

const handleHit = () => {
    const img = document.getElementById("target");

    // Controleer of het een bom is (bijv. index 0 is een bom) [cite: 101, 105]
    if (img.src.includes("0.png")) {
        alert("Game Over! Score: " + global.score);
        clearInterval(global.timeoutId);
    } else {
        global.score++; // Punt toekennen [cite: 104, 118]
        console.log("Score: " + global.score);
        moveObject(); // Direct verplaatsen na klik [cite: 120]
    }
};
const startGame = () => {
    const img = document.getElementById("target");
    img.addEventListener("click", handleHit); // Klik-listener toevoegen [cite: 110]

    // Start de herhalende timer [cite: 125, 126]
    global.timeoutId = setInterval(moveObject, global.MOVE_DELAY);
};