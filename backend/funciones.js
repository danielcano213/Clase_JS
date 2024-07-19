//Ejemplo
//Sintaxis: Declariacion de funcion
//invocar, llamar, ejecutar saludo
saludo("Daniel")//-> argumento:daniel
function saludo(nombre){//-> parametor
    console.log(`Hola ${nombre} como estas`);
}

//Sintaxos : expresion funcion:
//la expresion funcio se asigna a una constante ejemplo saludo
const saludo2 = function(nombre="Daniel2"){//->PARAMETRO POR DEFECTO
    console.log(`Hola ${nombre} como estas`);
}
//invocar saludo2
saludo2();
