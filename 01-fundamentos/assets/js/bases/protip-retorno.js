// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido,
//     };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

// const persona = crearPersona("Sergio", "Alcantara");
// console.log(persona);

function imprimirArgumentos() {
    console.log(arguments);
}

const imprimirArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
};

// imprimirArgumentos(10, true, false, "Sergio", "Hola");
const [casado, vivo, nombre, saludo] = imprimirArgumentos2(
    10,
    true,
    false,
    "Sergio",
    "Hola"
);
// console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona("Sergio", "Alcantara");
// console.log({ nuevoApellido });

let tony = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//     console.log("nombre", personaje.nombre);
//     console.log("codeName", personaje.codeName);
//     console.log("vivo", personaje.vivo);
//     console.log("edad", personaje.edad);
//     console.log("trajes", personaje.trajes);
// };
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};

imprimePropiedades(tony);
