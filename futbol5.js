/* Ejercicio Clase 27/05/2023 - Queremos representar un equipo de fútbol 5
Para ello necesitamos tener el nombre de cada jugader, su posición
(arco, defensa, mediocampo, adelante) y su edad.
¿Cómo representamos cada jugador?
¿Cómo representamos un equipo?
¿Cómo representamos los 8 equipos que juegan el torneo? */

let jugador1 = {nombre: "Juan", puesto: "defensa", edad: 30};
let jugador2 = {nombre: "Pedro", puesto: "mediocampo", edad: 31};
let jugador3 = {nombre: "Luis", puesto: "adelante", edad: 29};
let jugador4 = {nombre: "Pepe", puesto: "arco", edad: 30};
let jugador5 = {nombre: "Cacho", puesto: "defensa", edad: 26};
let equipo1 = {jugador1, jugador2, jugador3, jugador4, jugador5};
console.log(equipo1);
// Algunas pruebitas
console.log(equipo1.jugador1.edad);
console.log(equipo1.jugador1.nombre);
console.log(equipo1.jugador2);
// Para representar los otros equipos se repetiría el "let equipoX = ...." siete veces más

