const readlineSync = require('readline-sync');
const numeroDia = readlineSync.question('Ingresa un numero de dia de la semana (lunes = 1 ... domingo = 7): ');
let numeroDia1 = Number(numeroDia);
switch(numeroDia1) {
    case 1:
        console.log("Hoy es lunes");
        break
    case 2:
        console.log("Hoy es martes");
        break
    case 3:
        console.log("Hoy es miercoles");
        break
    case 4:
        console.log("Hoy es jueves");
        break
    case 5:
        console.log("Hoy es viernes");
        break
    case 6:
        console.log("Hoy es sabado");
        break
    case 7:
        console.log("Hoy es domingo");
        break
    default:
        console.log("Número inválido");
}
