export function listaKiir(LISTA){
    for( let index=0; index < LISTA.length; index++)
        console.log(LISTA[index].nev,LISTA[index].tel)
    }

export function listaOsszeallit(LISTA){
        let txt="<ul>"
        for( let index=0; index < LISTA.length; index++){
            txt += `<li>${LISTA[index].nev},${LISTA[index].tel}</li>`
        }
            txt+="</ul>"
            console.log(txt)
            return txt
    }

export function tablazatOsszeallit(LISTA){
    let txt="<ul>"
    for( let index=0; index < LISTA.length; index++){
        txt += `<li>${LISTA[index].nev},${LISTA[index].tel}</li>`
        }
        txt+="</ul>"
        console.log(txt)
        return txt
    }

