function saludar(nombre) {
    // console.log(arguments);
    // console.log("Hola " + nombre);
    return [1, 2];
    console.log("Soy un código que nunca me voy a ejecutar");
}

const saludar2 = function (nombre) {
    console.log("Hola " + nombre);
};

const saludarFlecha = () => {
    console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
    console.log("Hola " + nombre);
};

const retornoDeSaludar = saludar("Sergio", 40, true, "Costa Rica"); // 1
// console.log({ retornoDeSaludar });
// saludar2("Sergio");
// saludarFlecha();
// saludarFlecha2("Sergio");

function sumar(a, b) {
    return a + b;
}

// Puede simplificarse como:
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

// Transforme la función anterior en una función de flecha, que no tena {}
// getAleatorio2();
const getAleatorio2 = () => Math.random();

// console.log(sumar(1, 2));
// console.log(sumar2(3, 4));
// console.log(getAleatorio());
console.log(getAleatorio2());
