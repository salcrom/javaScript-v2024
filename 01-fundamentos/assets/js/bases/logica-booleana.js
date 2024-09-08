const regresaTrue = () => {
    console.log("Regresa true");
    return true;
};

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
};

console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse());

console.warn("And");
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log("========");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log("===== && =====");
regresaFalse() && regresaTrue();

console.warn("OR");
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() && regresaTrue());

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150;
const a1_1 = false && "Hola Mundo" && 150;
const a2 = "Hola" && "Mundo" && soyFalso;
const a3 = soyFalso || "Ya no soy falso";
const a4 =
    soyFalso || soyUndefined || soyNull || "Ya no soy false de nuevo" || true;
const a5 =
    soyFalso ||
    soyUndefined ||
    regresaTrue() ||
    "Ya no soy false de nuevo" ||
    true;
console.log({ a1, a1_1, a2, a3, a4, a5 });
