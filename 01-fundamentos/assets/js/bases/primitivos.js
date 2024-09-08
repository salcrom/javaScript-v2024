let nombre = "Peter Parker";
console.log(nombre);

nombre = "Ben Parker"; // no se puede poner let, porque ya está inicializada la variable
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder); // ??? undefined

let soyNull = null;
console.log(typeof soyNull);

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1);

console.log(symbol1 === symbol2);
