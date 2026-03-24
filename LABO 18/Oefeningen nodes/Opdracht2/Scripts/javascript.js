// 1. Itereer door elk li-element en wijzig de class naar "listitem" [cite: 326]
const items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
    items[i].className = "listitem";
}

// 2. Maak een nieuw img-element aan [cite: 330]
const profielFoto = document.createElement("img");

// 3. Geef een waarde aan het src-attribuut [cite: 330]
profielFoto.setAttribute("src", "https://via.placeholder.com/150");
profielFoto.setAttribute("alt", "Profielfoto");

// 4. Plaats het img-element op het einde van de body [cite: 331]
document.body.appendChild(profielFoto);