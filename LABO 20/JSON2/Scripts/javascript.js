const jsonString = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';

// Maak een object a.d.h.v. deze JSON String
const persoon = JSON.parse(jsonString);
console.log(persoon.adres.gemeente);