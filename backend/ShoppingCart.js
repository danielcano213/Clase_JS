const carrito = [
    {
        nombre: "Lenovo Thinkpad",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador portátil",
        modelo: "VG6",
        precio: {
            minimoventa: 300000,
            compra: 1000000
        },
        caracteristicas: {
            dimensiones: {
                alto: "2 cm",
                ancho: "50 cm",
                largo: "30 cm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date(`2024-07-22`)
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Audífonos Samsung",
        descripcion: "Dispositivo para escuchar música",
        tipoProducto: "Dispositivos auriculares",
        modelo: "A74",
        precio: {
            minimoventa: 50000,
            compra: 1000
        },
        caracteristicas: {
            dimensiones: {
                alto: "2 M",
                ancho: "20 cm",
                largo: "10 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date(`2024-06-15`)
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Ratón",
        descripcion: "Mouse inalámbrico",
        tipoProducto: "Periférico",
        modelo: "M235",
        precio: {
            minimoventa: 20000,
            compra: 80000
        },
        caracteristicas: {
            dimensiones: {
                alto: "3 cm",
                ancho: "6 cm",
                largo: "10 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date(`2024-05-10`)
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Monitor ",
        descripcion: "Monitor Full HD",
        tipoProducto: "Monitor",
        modelo: "P2419H",
        precio: {
            minimoventa: 150000,
            compra: 600000
        },
        caracteristicas: {
            dimensiones: {
                alto: "40 cm",
                ancho: "55 cm",
                largo: "20 cm"
            },
            fabricacion: {
                pais: "México",
                fecha: new Date(`2024-04-25`)
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Teclado Mecánico",
        descripcion: "Teclado mecánico retroiluminado",
        tipoProducto: "Periférico",
        modelo: "MK850",
        precio: {
            minimoventa: 80000,
            compra: 300000
        },
        caracteristicas: {
            dimensiones: {
                alto: "5 cm",
                ancho: "45 cm",
                largo: "15 cm"
            },
            fabricacion: {
                pais: "Estados Unidos",
                fecha: new Date(`2024-03-30`)
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    }
];

// 5.1 Desestructurar cada objeto producto en el ciclo forEach
for (const producto of carrito) {
    const { nombre, tipoProducto, modelo, caracteristicas: { dimensiones: { largo }, fabricacion: { pais } } } = producto;
    console.log(`Nombre: ${nombre}, 
                 Tipo de Producto: ${tipoProducto},
                 Modelo: ${modelo},
                 Dimensión Largo: ${largo},
                 País de Fabricación: ${pais}`);
}

// 6.  Mostrar el costo total de adquisición del inventario
let costoTotalAdquisicion = carrito.reduce((total, producto) => {
    return total + producto.obtenerPrecioCompra();
}, 0);
//console.log(`El costo total de adquisición del inventario es: ${costoTotalAdquisicion}`);

//  7.1Consultar los productos que vengan de China
let productosChina = carrito.filter(producto => {
    return producto.caracteristicas.fabricacion.pais === "China";
});
//console.log("Productos que vienen de China:");
//productosChina.forEach(producto => console.log(producto.nombre));

// 7.2Consultar los productos que tengan más de dos metros de alto
let productosMasDeDosMetrosAlto = carrito.filter(producto => {
    let alturaEnMetros = parseFloat(producto.caracteristicas.dimensiones.alto) / 100;
    return alturaEnMetros > 2;
});
console.log("Productos que tienen más de dos metros de alto:");
productosMasDeDosMetrosAlto.forEach(producto => console.log(producto.nombre));

// 7.3Consultar los productos que tengan un precio mínimo de venta inferior a COP 10000
let productosPrecioMinVentaInferior10000 = carrito.filter(producto => {
    return producto.precio.minimoventa < 10000;
});
console.log("Productos con precio mínimo de venta inferior a COP 10000:");
productosPrecioMinVentaInferior10000.forEach(producto => console.log(producto.nombre));


