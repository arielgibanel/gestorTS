// 1. Model de dades (Interface)
interface Equip {
    nom: string;
    partitsJugats: number;
    punts: number;
    golsFavor: number;
    golsContra: number;
}

let exemple : Equip;

//creem una llista d'elements
let llistaEquips : Equip[] = [
    {
        "nom": "Castellón",
        "partitsJugats": 11,
        "punts": 26,
        "golsFavor": 22,
        "golsContra": 4
    },
    {
        "nom": "Almería",
        "partitsJugats": 11,
        "punts": 25,
        "golsFavor": 22,
        "golsContra": 9
    },
    {
        "nom": "Eibar",
        "partitsJugats": 11,
        "punts": 22,
        "golsFavor": 20,
        "golsContra": 13
    },
    {
        "nom": "Girona",
        "partitsJugats": 11,
        "punts": 21,
        "golsFavor": 22,
        "golsContra": 10
    },
    {
        "nom": "Granada",
        "partitsJugats": 11,
        "punts": 20,
        "golsFavor": 18,
        "golsContra": 14
    },
    {
        "nom": "Burgos",
        "partitsJugats": 11,
        "punts": 20,
        "golsFavor": 16,
        "golsContra": 12
    },
    {
        "nom": "RCD Mallorca",
        "partitsJugats": 11,
        "punts": 19,
        "golsFavor": 13,
        "golsContra": 6
    },
    {
        "nom": "Sporting Gijón",
        "partitsJugats": 11,
        "punts": 19,
        "golsFavor": 11,
        "golsContra": 13
    },
    {
        "nom": "Real Oviedo",
        "partitsJugats": 11,
        "punts": 18,
        "golsFavor": 15,
        "golsContra": 12
    },
    {
        "nom": "CE Sabadell",
        "partitsJugats": 11,
        "punts": 17,
        "golsFavor": 11,
        "golsContra": 9
    },
    {
        "nom": "Córdoba",
        "partitsJugats": 11,
        "punts": 15,
        "golsFavor": 17,
        "golsContra": 20
    },
    {
        "nom": "Tenerife",
        "partitsJugats": 11,
        "punts": 14,
        "golsFavor": 13,
        "golsContra": 15
    },
    {
        "nom": "CD Eldense",
        "partitsJugats": 11,
        "punts": 14,
        "golsFavor": 13,
        "golsContra": 15
    },
    {
        "nom": "UD Las Palmas",
        "partitsJugats": 11,
        "punts": 14,
        "golsFavor": 14,
        "golsContra": 19
    },
    {
        "nom": "Valladolid",
        "partitsJugats": 11,
        "punts": 12,
        "golsFavor": 16,
        "golsContra": 16
    },
    {
        "nom": "Celta B",
        "partitsJugats": 11,
        "punts": 12,
        "golsFavor": 16,
        "golsContra": 21
    },
    {
        "nom": "Leganés",
        "partitsJugats": 11,
        "punts": 12,
        "golsFavor": 7,
        "golsContra": 16
    },
    {
        "nom": "Cádiz",
        "partitsJugats": 11,
        "punts": 10,
        "golsFavor": 14,
        "golsContra": 14
    },
    {
        "nom": "Andorra",
        "partitsJugats": 11,
        "punts": 10,
        "golsFavor": 15,
        "golsContra": 20
    },
    {
        "nom": "Real Sociedad B",
        "partitsJugats": 11,
        "punts": 8,
        "golsFavor": 14,
        "golsContra": 22
    },
    {
        "nom": "AD Ceuta",
        "partitsJugats": 11,
        "punts": 5,
        "golsFavor": 10,
        "golsContra": 25
    },
    {
        "nom": "Albacete",
        "partitsJugats": 11,
        "punts": 4,
        "golsFavor": 8,
        "golsContra": 22
    }
]


// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    const inputPartitsjugats = document.getElementById('iPartitsjugats') as HTMLInputElement;
    const inputPunts = document.getElementById('iPunts') as HTMLInputElement;
    const inputGolsfavor = document.getElementById('iGolsfavor') as HTMLInputElement;
    const inputGolscontra = document.getElementById('iGolscontra') as HTMLInputElement;

    exemple = {
        nom: inputNom.value,
        partitsJugats: parseFloat(inputPartitsjugats.value) || 0,
        punts: parseFloat(inputPunts.value) || 0,
        golsFavor: parseFloat(inputGolsfavor.value) || 0,
        golsContra: parseFloat(inputGolscontra.value) || 0,


    }

    llistaEquips.push(exemple);
    console.log(exemple);
    console.table(llistaEquips)
    llistaEquips.sort((a, b) => b.punts - a.punts);


    // Actualitzar la pantalla
    actualitzarUI();
}


// 5. Funció per dibuixar l'array al DOM
function actualitzarUI(): void {
    // const nom = document.getElementById('nom') as HTMLInputElement;
    // const partitsjugats = document.getElementById('partitsJugats') as HTMLElement;
    // const punts = document.getElementById('punts') as HTMLElement;
    // const golsFavor = document.getElementById('golsFavor') as HTMLElement;
    // const golsContra = document.getElementById('golsContra') as HTMLElement;
    //
    // nom.innerText = exemple.nom
    // partitsjugats.innerText=String(exemple.partitsJugats)
    // punts.innerText=String(exemple.punts)
    // golsFavor.innerText=String(exemple.golsFavor)
    // golsContra.innerText=String(exemple.golsContra)


    const contenidor = document.getElementById('contenidorEquips') as HTMLElement;

    let html :string;
    html='<h1>Llista Equips</h1>'
    html+='<div class=\'cardEquip title\'>'
    html+='<h3>EQUIP</h3>'
    html+='<h3>PJ</h3>'
    html+='<h3>Punts</h3>'
    html+='<h3>GF</h3>'
    html+='<h3>GC</h3>'
    html+='<\/div>'



    for (let i = 0; i < llistaEquips.length; i++) {
        if (i==0){
            html+='<div class=\'cardEquip lider \'>'
        }
        else if (i==1){
            html+='<div class=\'cardEquip ascensDirecte \'>'
        }
        else if (i<=5){
            html+='<div class=\'cardEquip playoff\'>'
        }
        else if (i>=18){
            html+='<div class=\'cardEquip descens\'>'
        }
        else
            html+='<div class=\'cardEquip\'>'

        html+='<h3>'+llistaEquips[i].nom+'</h3>'
        html+='<h3>'+llistaEquips[i].partitsJugats+'</h3>'
        html+='<h3>'+llistaEquips[i].punts+'</h3>'
        html+='<h3>'+llistaEquips[i].golsFavor+'</h3>'
        html+='<h3>'+llistaEquips[i].golsContra+'</h3>'
        html += `<button onclick="partitGuanyat(${i})">V</button>`;
        html += `<button onclick="partitEmpatat(${i})">E</button>`;
        html += `<button onclick="partitPerdut(${i})">D</button>`;
        html += `<button onclick="golFavor(${i})">GF</button>`;
        html += `<button onclick="golContra(${i})">GC</button>`;

        html+='<\/div>'

    }
    contenidor.innerHTML= html;
}

function partitGuanyat(idEquip:number) {
    llistaEquips[idEquip].punts = llistaEquips[idEquip].punts + 3
    llistaEquips[idEquip].partitsJugats = llistaEquips[idEquip].partitsJugats += 1

    console.log(idEquip);
    llistaEquips.sort((a, b) => b.punts - a.punts);
    actualitzarUI()
}

function partitEmpatat(idEquip:number){
    llistaEquips[idEquip].punts=llistaEquips[idEquip].punts+1
    llistaEquips[idEquip].partitsJugats=llistaEquips[idEquip].partitsJugats+=1

    console.log(idEquip);
    llistaEquips.sort((a, b) => b.punts - a.punts);
    actualitzarUI()
}

function partitPerdut(idEquip:number){
    llistaEquips[idEquip].punts=llistaEquips[idEquip].punts
    llistaEquips[idEquip].partitsJugats=llistaEquips[idEquip].partitsJugats+=1

    console.log(idEquip);
    llistaEquips.sort((a, b) => b.punts - a.punts);
    actualitzarUI()
}

function golFavor(idEquip:number){
    llistaEquips[idEquip].golsFavor=llistaEquips[idEquip].golsFavor+1;


    console.log(idEquip);
    llistaEquips.sort((a, b) => b.punts - a.punts);
    actualitzarUI()
}

function golContra(idEquip:number){
    llistaEquips[idEquip].golsContra=llistaEquips[idEquip].golsContra+1;


    console.log(idEquip);
    llistaEquips.sort((a, b) => b.punts - a.punts);
    actualitzarUI()
}


// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);
    actualitzarUI();
});

actualitzarUI();