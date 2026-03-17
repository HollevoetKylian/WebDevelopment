const setup = () => {
let woord = "onoorbaar";
let resultaat="";
for (let i = 0; i < woord.length-2; i++) {
    resultaat+=woord.slice(i, i+3)+" - ";
}
    document.getElementById("output").innerText = resultaat.slice(0, -3);
}
window.addEventListener("load", setup);