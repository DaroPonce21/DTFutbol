import {createStore} from 'redux'


const initialState ={
    jugadores: [{
        id:1,
        nombre: "Acosta Miguel",
        dorsal: "1",
        posicion: "POR",
        foto:"https://cdn.resfu.com/img_data/players/medium/920186.jpg?size=120x&lossy=1",
        },
        {
        id:2,
        nombre: "Torrén Miguel",
        dorsal: "2",
        posicion: "DFC",
        foto:"https://cdn.resfu.com/img_data/players/medium/71665.jpg?size=120x&lossy=1",
        },
        {
        id:3,
        nombre: "Sánchez Luciano",
        dorsal: "3",
        posicion: "CAI",
        foto:"https://cdn.resfu.com/img_data/players/medium/278951.jpg?size=120x&lossy=1",
        },
        {
        id:4,
        nombre: "Mac Allister Kevin",
        dorsal: "4",
        posicion: "DFC",
        foto:"https://cdn.resfu.com/img_data/players/medium/317952.jpg?size=120x&lossy=1",
        },
        {
        id:5,
        nombre: "Redondo Federico",
        dorsal: "5",
        posicion: "MC",
        foto:"https://cdn.resfu.com/img_data/players/medium/3140048.jpg?size=120x&lossy=1",
        },
        {
        id:6,
        nombre: "Villalba Lucas",
        dorsal: "6",
        posicion: "DFC", 
        foto:"https://cdn.resfu.com/img_data/players/medium/146113.jpg?size=120x&lossy=1",
        },
        {
        id:7,
        nombre: "Cabrera Javier",
        dorsal: "7",
        posicion:"ED",
        foto:"https://cdn.resfu.com/img_data/players/medium/192295.jpg?size=120x&lossy=1",
        },
        {
        id:8,
        nombre: "Rodríguez Alan",
        dorsal: "8",
        posicion: "MC", 
        foto:"https://cdn.resfu.com/img_data/players/medium/365320.jpg?size=120x&lossy=1",
        },
        {
        id:9,
        nombre: "Ávalos Gabriel",
        dorsal: "9",
        posicion: "DC",
        foto:"https://cdn.resfu.com/img_data/players/medium/232229.jpg?size=120x&lossy=1",
        },
        {
        id:10,
        nombre: "Verón Gastón",
        dorsal:"10",
        posicion: "DC", 
        foto:"https://cdn.resfu.com/img_data/players/medium/618251.jpg?size=120x&lossy=1",
        },
        {
        id:11,
        nombre: "Nuss Thiago",
        dorsal: "11",
        posicion: "ED",
        foto:"https://cdn.resfu.com/img_data/players/medium/848099.jpg?size=120x&lossy=1",
        },
        {
        id:12,
        nombre: "Cardozo Juan",
        dorsal: "12",
        posicion: "MC",
        foto: "https://assets-es.imgfoot.com/media/cache/150x150/portrait/juan-jose-cardozo.png",
        },
        {
        id:13,
        nombre: "González Metilli Francisco",
        dorsal: "13",
        posicion: "MCO",
        foto:"https://cdn.resfu.com/img_data/players/medium/319304.jpg?size=120x&lossy=1",
        },
        {
        id:14,
        nombre: "Vera Matías",
        dorsal: "14",
        posicion: "MC",
        foto:"https://cdn.resfu.com/img_data/players/medium/274716.jpg?size=120x&lossy=1",
        },
        {
        id:15,
        nombre: "Heredia Leonardo",
        dorsal: "15",
        posicion: "MCO",
        foto:"https://cdn.resfu.com/img_data/players/medium/224724.jpg?size=120x&lossy=1",
        },
        {
        id:16,
        nombre: "Cabral Rodrigo",
        dorsal: "16",
        posicion: "EI",
        foto:"https://cdn.resfu.com/img_data/players/medium/881642.jpg?size=120x&lossy=1",
        },
        {
        id:17,
        nombre: "Moyano Franco",
        dorsal: "17",
        posicion: "MCD",
        foto:"https://cdn.resfu.com/img_data/players/medium/357581.jpg?size=120x&lossy=1",
        },
        {
        id:18,
        nombre: "Montiel Santiago",
        dorsal: "18",
        posicion: "MCD",
        foto:"https://cdn.resfu.com/img_data/players/medium/922606.jpg?size=120x&lossy=1",
        },
        {
        id:19,
        nombre: "Ferreyra Facundo",
        dorsal: "19",
        posicion: "DC",
        foto:"https://cdn.resfu.com/img_data/players/medium/54472.jpg?size=120x&lossy=1",
        },
        {
        id:20,
        nombre: "Lanzillotta Federico",
        dorsal: "20",
        posicion: "POR",
        foto:"https://cdn.resfu.com/img_data/players/medium/135961.jpg?size=120x&lossy=1",
        },
        {
        id:21,
        nombre: "Domínguez Fabricio",
        dorsal: "21",
        posicion: "MC",
        foto:"https://cdn.resfu.com/img_data/players/medium/781025.jpg?size=120x&lossy=1",
        },
        {
        id:22,
        nombre: "Ovando Lautaro",
        dorsal:"22",
        posicion:"DC", 
        foto:"https://cdn.resfu.com/img_data/players/medium/885966.jpg?size=120x&lossy=1",
        },
        {
        id:23,
        nombre:"Ambrogio Lucas",
        dorsal:"23",
        posicion: "EI", 
        foto:"https://cdn.resfu.com/img_data/players/medium/873424.jpg?size=120x&lossy=1",
        },
        {
        id:24,
        nombre: "González Leonel",
        dorsal: "24",
        posicion: "LTI",
        foto:"https://cdn.resfu.com/img_data/players/medium/198569.jpg?size=120x&lossy=1",
        },
        {
        id:25,
        nombre: "Arias Alexis Martín",
        dorsal: "25",
        posicion: "POR",
        foto:"https://cdn.resfu.com/img_data/players/medium/196960.jpg?size=120x&lossy=1",
        },
        {
        id:26,
        nombre: "Herrera José",
        dorsal:"26",
        posicion: "ED", 
        foto:"https://cdn.resfu.com/img_data/players/medium/3281669.jpg?size=120x&lossy=1",
        },
        {
        id:27,
        nombre: "Bíttolo Mariano",
        dorsal: "27",
        posicion: "CAI",
        foto:"https://cdn.resfu.com/img_data/players/medium/72140.jpg?size=120x&lossy=1",
        },
        {
        id:28,
        nombre: "Perelló Matías",
        dorsal: "28",
        posicion: "ED",
        foto:"https://argentinosjuniors.com.ar/wp-content/uploads/2021/04/408_15-09-20uma.jpg",
        },
        {
        id:29,
        nombre: "Di Cesare Marco",
        dorsal: "29",
        posicion: "DFC",
        foto:"https://cdn.resfu.com/img_data/players/medium/923891.jpg?size=120x&lossy=1",
        },
        {
        id:30,
        nombre: "Minissale Pablo",
        dorsal: "30",
        posicion: "DFC",
        foto:"https://cdn.resfu.com/img_data/players/medium/923857.jpg?size=120x&lossy=1",
        }
        ],
    titulares: [],
    suplentes: [],
}
const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    return state
}

export default createStore(reducerEntrenador)