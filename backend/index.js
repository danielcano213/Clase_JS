console.log("Carrito de compras..");
//template string:
//Alternativa a la contenacion
// permite incrustar un valor dentor de un string
const nombreProducto = String("Lenovo V4")
console.log('El producto es: ${nombreProducto}')

const precioProducto = 23;
const precioProductostr = "23";

console.log(  precioProducto);
console.log( precioProductostr);

console.log( precioProducto == precioProductostr);


//Objeto Producto: 
//Objeto literal
const producto1 = {
    nombre : "Lenovo Thinkpad ",
    color : "Red",
    modelo : "IU643",
    description : "laptop para trabajo liviano",
    precio: 2340000.89,
    getmodelo: function(){
        console.log(this.modelo)
    }
}
//invocar metodo get modelo//
producto1.getmodelo();

//sin desestruracion
nombresito = producto1.nombre
console.log.apply(nombresito)

//con desustruracion
const { description , precio } = producto1;
console.log(description, precio)

//object constructor:
const Producto = function(nombre
    , color 
    , precio){
this.nombre = nombre,
this.color = color,
this.precio = precio

//2 instancias de producto//
const p1 = new Producto("Lapiz HB Berol",
       "Azul",
       500)
}
console.log(p1)

