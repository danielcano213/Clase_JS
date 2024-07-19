//Sintaxis  Funcion Arrow Flecha 
//reglas:
// 1. si el bloque de codigo
// de la funcion flecha solo tiene
// una linea, no hace falta pnerle corchete.
// 2. si las funciones flecha tienen un solo
// parametro se puede omitir el parentesisi de los paramaetros.
// 3. si el bloque de codigo
// de la funcion flecha solo tiene
// una linea, y esta linea debe retornar un valor es posible omitir el return
// pero solo si se aplica la regla 1.
const saludo = ( nombre ) =>
     `Hola ${nombre} desde
         una funcion flecha`
;

//invocar a la funcion flecha
console.log(saludo("Daniel"));