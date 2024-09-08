const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     // i = i + 1;
//     i++;
// }

// undefined
// null
// false
// En ningú de los casos anteriores se ejecuta el ciclo anterior

while (i < carros.length) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

console.warn("Do while");

let j = 10;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);
