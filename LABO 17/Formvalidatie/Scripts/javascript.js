const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", valideer);
};

const isGetal = (tekst) => {
    return !isNaN(tekst) && tekst.trim() !== ""; // [cite: 280, 281, 282]
};

const valideer = () => {
    let alleGeldig = true;

    // Hulpmiddel om veld te resetten
    const resetVeld = (id, errorId) => {
        document.getElementById(id).classList.remove("invalid");
        document.getElementById(errorId).innerText = "";
    };

    // Hulpmiddel om fout te zetten
    const rapporteerFout = (id, errorId, boodschap) => {
        document.getElementById(id).classList.add("invalid");
        document.getElementById(errorId).innerText = boodschap;
        alleGeldig = false;
    };

    // 1. Voornaam (max 30 karakters)
    let voornaam = document.getElementById("voornaam").value.trim(); // [cite: 269]
    resetVeld("voornaam", "errVoornaam");
    if (voornaam.length > 30) {
        rapporteerFout("voornaam", "errVoornaam", "max. 30 karakters"); // [cite: 241]
    }

    // 2. Familienaam (verplicht, max 50)
    let familienaam = document.getElementById("familienaam").value.trim();
    resetVeld("familienaam", "errFamilienaam");
    if (familienaam.length === 0) {
        rapporteerFout("familienaam", "errFamilienaam", "verplicht veld"); // [cite: 244]
    } else if (familienaam.length > 50) {
        rapporteerFout("familienaam", "errFamilienaam", "max. 50 karakters"); // [cite: 244]
    }

    // 3. Geboortedatum (jjjj-mm-dd handmatig)
    let datum = document.getElementById("geboortedatum").value.trim();
    resetVeld("geboortedatum", "errGeboortedatum");
    let datumOnderdelen = datum.split("-");

    if (datum.length === 0) {
        rapporteerFout("geboortedatum", "errGeboortedatum", "verplicht veld"); // [cite: 247]
    } else if (datumOnderdelen.length !== 3 || datum.indexOf("-") !== 4 || datum.lastIndexOf("-") !== 7) {
        rapporteerFout("geboortedatum", "errGeboortedatum", "formaat is niet jjjj-mm-dd"); // [cite: 249, 278]
    } else {
        let jaar = datumOnderdelen[0];
        let maand = datumOnderdelen[1];
        let dag = datumOnderdelen[2];

        if (!isGetal(jaar) || jaar.length !== 4 || !isGetal(maand) || maand.length !== 2 || !isGetal(dag) || dag.length !== 2) {
            rapporteerFout("geboortedatum", "errGeboortedatum", "formaat is niet jjjj-mm-dd"); // [cite: 277, 278]
        }
    }

    // 4. Email (verplicht, exact 1 @, min 1 char voor/na)
    let email = document.getElementById("email").value.trim();
    resetVeld("email", "errEmail");
    let atPositie = email.indexOf("@");
    let laatsteAtPositie = email.lastIndexOf("@");

    if (email.length === 0) {
        rapporteerFout("email", "errEmail", "verplicht veld"); // [cite: 254]
    } else if (atPositie === -1 || atPositie !== laatsteAtPositie || atPositie === 0 || atPositie === email.length - 1) {
        rapporteerFout("email", "errEmail", "geen geldig email adres"); // [cite: 256, 257]
    }

    // 5. Aantal kinderen (getal, positief, < 99)
    let kinderen = document.getElementById("kinderen").value.trim();
    resetVeld("kinderen", "errKinderen");
    if (!isGetal(kinderen) || parseInt(kinderen) < 0) {
        rapporteerFout("kinderen", "errKinderen", "is geen positief getal"); // [cite: 260, 261]
    } else if (parseInt(kinderen) >= 99) {
        rapporteerFout("kinderen", "errKinderen", "is te vruchtbaar"); // [cite: 261]
    }

    // Einde: Proficiat popup
    if (alleGeldig) {
        alert("proficiat!"); // [cite: 268]
    }
};

window.addEventListener("load", setup);