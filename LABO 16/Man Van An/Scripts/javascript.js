document.getElementById('tellerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tekst = document.getElementById('zinInput').value;
    const zoekterm = "an";

    // indexOf methode
    let tellerIndex = 0;
    let i = tekst.indexOf(zoekterm);
    while (i !== -1) {
        tellerIndex++;
        i = tekst.indexOf(zoekterm, i + 1);
    }

    // lastIndexOf methode
    let tellerLast = 0;
    let li = tekst.lastIndexOf(zoekterm);
    while (li !== -1) {
        tellerLast++;
        if (li === 0) break;
        li = tekst.lastIndexOf(zoekterm, li - 1);
    }

    document.getElementById('resIndex').textContent = tellerIndex + " keer";
    document.getElementById('resLastIndex').textContent = tellerLast + " keer";
});