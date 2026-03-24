// Selecteer alle p-elementen (querySelectorAll geeft een NodeList terug) [cite: 50, 300]
const paragrafen = document.querySelectorAll("p");

// Pas de tekst aan van het eerste element in de lijst 
if (paragrafen.length > 0) {
    paragrafen[0].textContent = "Goed gedaan!";
}