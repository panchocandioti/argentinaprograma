let userInput = prompt("Ingrese un valor: ");
console.log("El valor ingresado es: "+userInput);

let userName = prompt("Ingrese su nombre y apellido: ");
let nombreSeparado = userName.split(" ");
let inicialNombre = nombreSeparado[0].charAt(0);
let inicialApellido = nombreSeparado[nombreSeparado.length-1].charAt(0);
console.log(inicialNombre+inicialApellido);

let cadena = prompt("Ingrese una oración: ");
let cadenaSeparada = cadena.split(" ");

let cadena1 = prompt("Ingrese una oración: ");
let cadenaMinuscula = cadena1.toLowerCase();


