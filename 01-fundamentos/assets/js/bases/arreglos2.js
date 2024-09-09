let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Largo:", juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

// Añadir un elemento al final
let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

// Añadir un elemento al principio
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

// Borrar el último elemento
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Borrar un elemento intermedio
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

// Ver el índice de un elemento dentro del arreglo
let metroidIndex = juegos.indexOf("Metroid");
console.log({ metroidIndex });
