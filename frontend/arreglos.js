// Definir un arreglo de nombres de productos
const nombres = ["Lapiz HB", "Resaltador", "Borrador de nata"];

// Arreglar elementos del arreglo
nombres[3] = "Micropunta";
console.table(nombres);
console.log(nombres[1]);

// Agregar un elemento al final
nombres.push("Corrector");
// Agregar al inicio
nombres.unshift("Borrador miga de pan");
console.table(nombres);

// Eliminar elemento de un arreglo
delete nombres[3];
console.table(nombres);

// Eliminar elementos del final
nombres.pop();
console.table(nombres);

// Eliminar elementos del principio
nombres.shift();
console.table(nombres);

// Recorrer el arreglo
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Operador Spread con arreglos
const nombres2 = ["Transportador", "Regla 30 cm"];
let productos = [...nombres, ...nombres2];
const elemento = "compas";
let productos1 = [...productos, elemento];
const Transportador = "transportador";
productos1 = [...productos1, Transportador];

console.table(productos);
