const setup = () => {
    window.addEventListener('load', (event) => {
        document.getElementById('voornaam').focus();
    });
}
window.addEventListener("load", setup);