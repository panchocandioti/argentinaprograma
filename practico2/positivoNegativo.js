const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresa un numero, por favor: ');
if (numero > 0) {
    console.log("El numero es positivo");
} else if (numero == 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
}