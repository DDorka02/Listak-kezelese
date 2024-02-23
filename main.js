import { SZEMELYLISTA } from "./adat.js";
import {listaKiir, tablazatOsszeallit} from "./fuggveny.js";
import { listaOsszeallit } from "./fuggveny.js";

console.log(SZEMELYLISTA)

//console.log(SZEMELYLISTA[1].nev,SZEMELYLISTA[1].tel)

listaKiir(SZEMELYLISTA)


// html elemek elérése -dom elérése
// megfogom a div lista elemet
const LISTAELEM=document.querySelector("#lista")
//const LISTAELEM=document.getElementById("lista")
console.log(LISTAELEM)
// módosítom a tertelmát
LISTAELEM.innerHTML="<h3>Cím lista</h3>"
listaOsszeallit(SZEMELYLISTA)
const TABLAZAT=document.querySelector("#tablazat")
console.log(TABLAZAT)
TABLAZAT.innerHTML="<h3>Cím lista</h3>"
tablazatOsszeallit(SZEMELYLISTA)

    
        