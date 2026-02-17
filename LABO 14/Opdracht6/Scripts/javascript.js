const setup = () => {
    let pElement=document.getElementById("txtOutput");
    document.getElementById("button").onclick( pElement.innerHTML="Welkom!");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);