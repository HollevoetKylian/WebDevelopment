const setup = () => {
    const kopieer = () => {
        let output = document.getElementById("txtOutput");
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        output.innerHTML="Welkom!";
    }
}
window.addEventListener("load", setup);