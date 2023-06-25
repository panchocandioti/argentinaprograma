let invitados = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (i = 0; i <= (invitados.length-1); i++) {
    if (invitados[i] === "Jose" || invitados[i] === "Sofia") {
        rechazados.push(invitados[i]);
    } else {
        admitidos.push(invitados[i]);
    }
}

console.log("La lista de invitados admitidos es:");
for (i = 0; i <= (admitidos.length-1); i++) {
    console.log(admitidos[i]);
}

console.log("La lista de invitados rechazados es:");
for (i = 0; i <= (rechazados.length-1); i++) {
    console.log(rechazados[i]);
}

//EXTRA
admitidos.sort()
rechazados.sort()

console.log("La lista ordenada de invitados admitidos es:");
for (i = 0; i <= (admitidos.length-1); i++) {
    console.log(admitidos[i]);
}

console.log("La lista ordenada de invitados rechazados es:");
for (i = 0; i <= (rechazados.length-1); i++) {
    console.log(rechazados[i]);
}