
//ARREGLOS EN JS

//Un arreglo es un congunto de informacion que se encuentra en una misma variable. en consola nostros veremos los arreglos dentro de llaves cuadradas [] 
//const arreglo  = new Array();//usalmente no se usa "new Array()" a excepcion de que se quiera usar un arreglo con un tamaño fijo o predefinido, esto quiere decir que el arreglo se puede expandir

//normalmente debemo hacer arreglos de la siguiente forma:
const arreglo = [ 1, 2, 3, 4 ];

// arreglo.push(1);//esto agrega un nuevo valor al arreglos. SIN EMBARGO NO SE RECOMUENDA USAR PUSH PORQUE ESTE MODIFICA EL OBJETO PRINCIPAL, por lo que se recomienda usar el operador spread, el cual se muestra proximamente
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//NOTA: las posiciones de cada uno de los valores se tienen desde el 0 hasta la cantidad de valores que se tiene, es decir si tengo un arreglo = [1, 2, 3, 4, ...], la posicion para 1 es 0 (0:1), para 2 es 1 (1:2), para 3 es 2 (2:3), y asi segun la cantidad de valores que tenga el arreglo.


//en este caso vamos a crear un segundo arreglo pero lo que queremos es tomar los valores del primer arreglo y agregarlos al nuevo arreglo junto con un valor mas (5), para ello empleamos el operador SPREAD (...) junto con la mencion del primer arreglo. con esto nos evitamos usar arreglo2.push( 5 )
let arreglo2 = [ ...arreglo, 5 ];

//usaremos el metodo llamado map(), para este metodo dentro de map debe existir una funcion de lo contrario esta indefinida.
const arreglo3 = arreglo2.map( function ( numero ) {
    return numero * 2;
});//en este caso la funcion que se realiza es multiplicar por 2 cada uno de los valores, lo que map se encarga de tomar cada uno de los valores del arreglo mencionado (en este caso del arreglo 2) y realiza la funcion mencionada. PARA MAS INFORMACION DE MAP: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
