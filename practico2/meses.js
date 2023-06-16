const readlineSync = require('readline-sync');
const numeroDeMes = readlineSync.question('Ingresa un numero de mes (1 a 12): ');
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let mesIngresado = meses[numeroDeMes-1];
let cantidadDeDias = 31;
if (numeroDeMes == 4 || numeroDeMes == 6 || numeroDeMes == 9 || numeroDeMes == 11) {
    cantidadDeDias = 30;
} else if (numeroDeMes == 2) {
    cantidadDeDias = 28;
}
console.log("La cantidad de dias del mes de %s es %i", mesIngresado, cantidadDeDias);