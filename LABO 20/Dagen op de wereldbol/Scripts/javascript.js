let geboorte = new Date(2007,0,6);
let datum = new Date();
let berekenDagen = (geboortejaar, nu) =>{
    let start = new Date(geboortejaar);
    let eind = new Date(nu);
    let tijdsverschil = eind - start;
    let dagverschil = tijdsverschil / (1000 * 3600 * 24);
    return dagverschil;
}
console.log(Math.floor(berekenDagen(geboorte,datum)));
