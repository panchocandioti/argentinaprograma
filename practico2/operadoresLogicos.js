const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresa un numero entero, por favor: ');
numero1 = Number(numero);
resto = numero1 %2;
if (numero1 > 0 && resto === 0) {
    console.log("El numero es positivo y par");
} else if (numero1 > 0 && resto !== 0) {
    console.log("El numero es positivo e impar");
} else if (numero1 < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}