import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];
const TABLAZAT = document.getElementById("feladat_1");
const OSSZESITO = document.getElementById("feladat_2");
const BEFUTOTT = document.getElementById("feladat_3");
const torlesGombb = document.getElementById("torlesGombb");


// 1. feladat
function letrehozTablazat() {
    let szoveg = "<table>";
    for (let index = 0; index < FUTOK.length; index++) {
        szoveg += "<tr>"
        for (const key in FUTOK[index]) {
            szoveg+= `<td>${FUTOK[index][key]}</td>`;
        }
        szoveg += "</tr>";
    }
    szoveg += "</table>";
    return szoveg;
}
TABLAZAT.innerHTML = letrehozTablazat();

// 2. feladat
function osszesit() {
    let szoveg = "<h3>Összesítő</h3><br>";
    let felmaraton = 0;
    let maraton = 0;
    let tiz = 0;
    for (let index = 0; index < FUTOK.length; index++) {
        if (FUTOK[index].versenySzam == "félmaraton") {
            felmaraton++;
        }else if(FUTOK[index].versenySzam == "maraton"){
            maraton++;
        }else if(FUTOK[index].versenySzam == "10 km"){
            tiz++;
        }

    }
    szoveg += `<p>félmaraton:${felmaraton} db</p>
               <p>maraton:${maraton} db</p>
               <p>10km:${tiz} db</p>`;
    return szoveg;
}
OSSZESITO.innerHTML = osszesit();

// 3. feladat
const trTag = document.querySelectorAll("tr");

function befutott() {
    let szoveg = "";
    for (let index = 0; index < trTag.length; index++) {
/*         szoveg += "<tr"; */
        trTag[index].addEventListener("click", function () {
            if(befutottVersenyzok.indexOf(FUTOK[index])){
            szoveg += "<tr>";
            szoveg += `<td>${FUTOK[index].nev}</td>`;
            szoveg += `<td>${FUTOK[index].nemzetiseg}</td>`;
            szoveg += `<td>${FUTOK[index].versenyIdo}</td>`;
            /* szoveg += `${event.target}`; */
            /* console.log(event.target); */
            szoveg += "</tr>";
            BEFUTOTT.innerHTML = szoveg;
            befutottVersenyzok.push(FUTOK[index]);
            }
        })
    }
    return befutottVersenyzok;
}
befutott();

// 4. feladat
function torolEsemeny() {
    torlesGombb.addEventListener("click", function(){
        befutottVersenyzok.pop();
        console.log("torles");
        console.log(befutottVersenyzok);

    })
}
torolEsemeny();

// 5. feladat
function ellenoriz(){
  
}