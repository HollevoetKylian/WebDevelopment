const setup = () => {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", toggleColor);
    }
}

const toggleColor = function() {
    // We checken of de achtergrond al blauw is
    if (this.style.backgroundColor === "blue") {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    } else {
        this.style.backgroundColor = "blue";
        this.style.color = "white"; // Tekst wit maken voor leesbaarheid
    }
}

window.addEventListener("load", setup);