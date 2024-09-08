// let a = 9;

// if (a >= 10) {
//     console.log("a es mayor o igual a 10");
// } else {
//     console.log("a es menor a 10");
// }

// console.log("Fin de programa");
const hoy = new Date();
const dia = hoy.getDay();

console.log({ dia });

// if (dia === 0) {
//     console.log("Domingo");
// } else {
//     if (dia === 1) {
//         console.log("Lunes");
//     } else {
//         console.log("No es lunes");
//     }
// }
// if (dia === 0) {
//     console.log("Domingo");
// } else if (dia === 1) {
//     console.log("Lunes");
// } else if (dia === 2) {
//     console.log("Martes");
// } else {
//     console.log("Hoy no es Martes, ni Lunes ni Domingo");
// }

// Sin usar If Else, o Switch, únicamente objetos
dia = 3; // 0: domingo, 1: lunes...
// día de la semnana
const diaLetras = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];
console.log(diaLetras[dia]);
