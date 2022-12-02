//TEMPLATE STRING

//los template string es una manera de concatenar strings, variables dentro de strings, caracteres multilinea, etc.

//creamos nuestras variables
const nombre = 'Juan Felipe';
const apellido = 'Daza Mesa';

//normalmente la concatenacion se realizaria de la siguiente manera
// const nombreCompleto= nombre + ' ' + apellido;

//una mejor forma de concatenar es la siguiente:
const nombreCompleto= `${ nombre } ${ apellido }`; //en este caso usamos ${}, en donde dentro de los corchetes se entiende que es codigo JS, usamos backtick ( `` ), este nos da los espacios.

 //una caracteristica de los template strings es que tiene en cuenta los enter o los saltos de linea e incluso acepta expresion de js dentro de las bactick como se muestra a continuacion:
 const nombreCompleto2= `
 ${ nombre }
  
 ${ apellido }
 ${ 1 + 1}
 `;
 //imprimo en consola la expresion anterior.
 console.log( nombreCompleto2 ); 

//imprimimos en consola
console.log( nombreCompleto );

//tambien podemos llamar funciones dentro de un Template String:
function getSaludo () {
    return 'Hola Mundo!';
}
//Llamamos la funcion dentro de un ${} porque ahi se da el codigo de JS
console.log( `Este es un saludo: ${ getSaludo() }` )


    //ejemplo combinando todo:
//a esta funcion le determinamos un argumento, en este caso nombrePersona
function getSaludo2 ( nombrePersona ) {
    return `Hola ${ nombrePersona }`;
}
//aqui llamamos a la funcion, se debe tener en cuenta que debemos poner la variable o el valor para el argumento de la funcion, ene ste caso usamos la constante creada incialmente llamada nombreCompleto.
console.log( `Este es otro saludo: ${ getSaludo2(nombreCompleto) }` )