//PROGRAMA PARA JUGAR A "PIEDRA, PAPEL, TIJERAS"

const readlineSync = require('readline-sync');

//Definición de constantes (Extra 1)
const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

//Obtener jugada de la computadora
function obtenerJugadaComputadora() {
    let listaJugadas = [piedra, papel, tijeras];
    let jugadaNumeroCompu = Math.floor(Math.random() * 3);
    let jugadaComputadora = listaJugadas[jugadaNumeroCompu];
    return jugadaComputadora;
}

//Obtener jugada del usuario con validación para evitar undefined
function obtenerJugadaUsuario() {
    let listaJugadas = [piedra, papel, tijeras];
    let opcion = false;

    while (opcion === false) {
        let jugadaNumeroUsuario = Number(readlineSync.question('Ingresa tu jugada (0: piedra | 1: papel | 2: tijeras): '));

        if (jugadaNumeroUsuario === 0 || jugadaNumeroUsuario === 1 || jugadaNumeroUsuario === 2) {
            let jugadaUsuario = listaJugadas[jugadaNumeroUsuario];
            opcion === true;
            return jugadaUsuario;
        }
    }
}

//Determinar ganador
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    let resultado;
    if (jugadaComputadora === jugadaUsuario) {
        resultado = "Empate";
    } else if (jugadaComputadora === piedra && jugadaUsuario === papel) {
        resultado = "Gana el usuario";
    } else if (jugadaComputadora === piedra && jugadaUsuario === tijeras) {
        resultado = "Gana la computadora";
    } else if (jugadaComputadora === papel && jugadaUsuario === piedra) {
        resultado = "Gana la computadora";
    } else if (jugadaComputadora === papel && jugadaUsuario === tijeras) {
        resultado = "Gana el usuario";
    } else if (jugadaComputadora === tijeras && jugadaUsuario === piedra) {
        resultado = "Gana el usuario";
    } else if (jugadaComputadora === tijeras && jugadaUsuario === papel) {
        resultado = "Gana la computadora";
    }
    return resultado;
}

//Presentación
console.clear();
console.log("Hola, vamos a jugar a 'PIEDRA, PAPEL O TIJERAS'");

//Jugar partido de "n" jugadas, con contador de jugadas y tanteador (parcial y final) (Extra 2)
let cantidadJugadas = Number(readlineSync.question('Ingresa la cantidad de jugadas del partido: '));
let puntosComputadora = 0;
let puntosUsuario = 0;
for (let i = 1; i <= cantidadJugadas; i++) {
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
    if (resultado === "Gana la computadora") {
        puntosComputadora += 1
    } else if (resultado === "Gana el usuario") {
        puntosUsuario += 1
    }
    console.clear();
    console.log("Jugada %i de %i", i, cantidadJugadas);
    console.log("La computadora eligio: %s.", jugadaComputadora);
    console.log("El usuario eligio: %s.", jugadaUsuario);
    console.log("El resultado fue: %s.", resultado);
    console.log("COMPUTADORA: %i | USUARIO: %i", puntosComputadora, puntosUsuario);
}
let resultadoPartido;
if (puntosComputadora === puntosUsuario) {
    resultadoPartido = "Empate"
} else if (puntosComputadora > puntosUsuario) {
    resultadoPartido = "Gana la computadora"
} else {
    resultadoPartido = "Gana el usuario"
}
console.log("RESULTADO DEL PARTIDO: %s", resultadoPartido);