// Recurso adicional:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.834,
        lng: -118.78,
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10880, 90265",
        ubicacion: "Malibu, California",
    },
    "ultima-pelicula": "Infinity War",
};

console.log(personaje);

console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);

console.log("Coors", personaje.coords);
console.log("Coors-lat", personaje.coords.lat);

console.log("No. Trajes:", personaje.trajes.length);
console.log("Último Trajes:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

console.log("ultima-pelicula", personaje["ultima-pelicula"]);

// Más detalles
//Para borrar un propiedad del objeto:
delete personaje.edad;

// Añadir una propiedad
personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Para bloquear la asignación de una constante:
Object.freeze(personaje);
personaje.dinero = 100000000000;
personaje.casado = false;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
