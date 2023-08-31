'use strict';

const CAMPAIGNJSON = `{
    "campaigns": [
        {
            "entrega":2,
            "name":"Dead Center",
            "nombre":"Punto Muerto",
            "imagen":"img/DeadCenter.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Dead_Center"
        },
        {
            "entrega":2,
            "name":"The Passing",
            "nombre":"Defunción",
            "imagen":"img/ThePassing.webp",
            "wikia":"https://left4dead.fandom.com/wiki/The_Passing"
        },
        {
            "entrega":2,
            "name":"Dark Carnival",
            "nombre":"Feria siniestra",
            "imagen":"img/DarkCarnival.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Dark_Carnival"
        },
        {
            "entrega":2,
            "name":"Swamp Fever",
            "nombre":"Pantanos",
            "imagen":"img/SwampFever.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Swamp_Fever"
        },
        {
            "entrega":2,
            "name":"Hard Rain",
            "nombre":"El diluvio",
            "imagen":"img/HardRain.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Hard_Rain"
        },
        {
            "entrega":2,
            "name":"The Parish",
            "nombre":"La parroquia",
            "imagen":"img/TheParish.webp",
            "wikia":"https://left4dead.fandom.com/wiki/The_Parish"
        },
        {
            "entrega":2,
            "name":"Cold Stream",
            "nombre":"Aguas turbulentas",
            "imagen":"img/ColdStream.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Cold_Stream"
        },




        {
            "entrega":1,
            "name":"No Mercy",
            "nombre":"Alta médica",
            "imagen":"img/NoMercy.webp",
            "wikia":"https://left4dead.fandom.com/wiki/No_Mercy"
        },
        {
            "entrega":1,
            "name":"Crash Course",
            "nombre":"Terapia de choque",
            "imagen":"img/CrashCourse.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Crash_Course"
        },
        {
            "entrega":1,
            "name":"Death Toll",
            "nombre":"Toque de difuntos",
            "imagen":"img/DeathToll.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Death_Toll"
        },
        {
            "entrega":1,
            "name":"Dead Air",
            "nombre":"Último vuelo",
            "imagen":"img/DeadAir.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Dead_Air"
        },
        {
            "entrega":1,
            "name":"Blood Harvest",
            "nombre":"Cosecha de sangre",
            "imagen":"img/BloodHarvest.webp",
            "wikia":"https://left4dead.fandom.com/wiki/Blood_Harvest"
        },
        {
            "entrega":1,
            "name":"The Sacrifice",
            "nombre":"El sacrificio",
            "imagen":"img/TheSacrifice.webp",
            "wikia":"https://left4dead.fandom.com/wiki/The_Sacrifice"
        },
        {
            "entrega":1,
            "name":"The Last Stand",
            "nombre":"La batalla final",
            "imagen":"img/TheLastStand.webp",
            "wikia":"https://left4dead.fandom.com/wiki/The_Last_Stand"
        }
    ]
}`;

const CAMPAIGNS = JSON.parse( CAMPAIGNJSON )['campaigns'];
const FONDOS = [ "bck/1.webp", "bck/2.webp", "bck/3.webp" ];

function enteroAleatorio( max ){ return Math.floor( Math.random() * max ); } // 0 y max-1

function elegirFondo(){
    document.body.style.backgroundImage = `url(${FONDOS[ enteroAleatorio( FONDOS.length ) ]})`;
}

function listarCampaigns(){
    let listas = document.getElementsByTagName('UL'),
        listaL4D2 = listas[0],
        listaL4D  = listas[1];

    for( let i in CAMPAIGNS ){
        let elementoLista = document.createElement('LI'),
            enlace        = document.createElement('A');

        enlace.setAttribute( 'target' , '_blank' );
        enlace.setAttribute( 'href'   , CAMPAIGNS[i].wikia );
        enlace.innerText = CAMPAIGNS[i].nombre;

        elementoLista.appendChild( enlace );

        switch( CAMPAIGNS[i].entrega ){
            case 1:  listaL4D.appendChild( elementoLista ); break;
            case 2: listaL4D2.appendChild( elementoLista ); break;
        }
    }
}

function listarDamit(){
    let elementoLista = document.createElement('LI'),
        enlace        = document.createElement('A');

    elementoLista.setAttribute( 'style'  , 'text-decoration:line-through;' );

    enlace.id = 'damIt';
    enlace.setAttribute( 'style'  , 'cursor:default;' );
    enlace.setAttribute( 'target' , '_blank' );
    enlace.setAttribute( 'href'   , 'https://left4dead.fandom.com/wiki/Dam_It' );
    enlace.innerText = 'Dam It';

    elementoLista.appendChild( enlace );

    document.getElementsByTagName('UL')[1].appendChild( elementoLista );
}

function obtenerCampaignAleatoria(){
    let figura     = document.getElementById('elegida'),
        imagen     = figura.firstElementChild,
        subtitulo  = imagen.nextElementSibling,
        subtitulo2 = subtitulo.nextElementSibling,
        campaign   = CAMPAIGNS[ enteroAleatorio( CAMPAIGNS.length ) ];

    imagen.setAttribute( 'src'   , campaign.imagen );
    imagen.setAttribute( 'alt'   , 'Póster de la campaña &quot;' + campaign.nombre + '&quot' );
    imagen.setAttribute( 'title' , campaign.nombre );

    subtitulo.innerText = campaign.nombre;
    subtitulo2.innerText = campaign.name;

    figura.nextElementSibling.focus();
}