
//FETCH API

//dentro de la pagina https://developers.giphy.com/ crearemos un usuario y crearemos una nueva aplicacion (tener en cuenta en seleccionar API), una vez realizado eso no creara una API key la cual vamos a copiar y la pegaremos en una cosntante como se muestra a continuacion:

const apikey = 'nBcxkk9YLYurYpgXmJKVvOWRMhcDSIDB';

//luego en la pagina nos dirigimos a Docs -> GIF & Stickers Endpoints -> Random Endpoint  (https://developers.giphy.com/docs/api/endpoint#random); ahi dentro copiaremos el URL de GIF URL y si se pega en una nueva ventana del navegador este dara un error, esto se debe a que se debe determinar el api key, por lo que se pegara en el navegador de la siguiente manera: https://developers.giphy.com/docs/api/endpoint#random?api_key=<PEGAR AQUI LA APIKEY>; es importante poner del URL "?api_key="

//una vez se realiza eso nos dara una gran cantidad de informacion sin embargo son enfocamos en el contenido de data y de images.

//Como se usa el FETCH API?
    //no se requiere instalacion previa porque este viene por defecto en los navegadores y se puede usar en React, para usarlo crearemos una constante donde contrendra la pagina junto con el API key

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

//para el fetch se entiende que retorna una promise<responsive> (poner cursor encima), por lo que es una promesa podremos hacer lo siguiente:

        // peticion.then( respuesta => {

            // console.log(respuesta);//dentro de los datos que se arrojan exite el "ok" en donde si dijera false es porque existe un error en la URL, por lo que tambien podriamo poner un catch justo despues del then.

            //si queremos obtener la informacion que vimos anteriormente se requiere una respuesta, la cual se solicita de la siguiente forma con el metodo "json()" el cual tambien retorna una promesa, por lo que tambien usamos un then:
            // respuesta.json().then( data => {
            //     console.log(data);//con esto obtenemos la informacion de la data de las imagenes el cual era nuestro objetivo (dentro de la seccion de imagenes trabajaremos con el "original")
        //     })
        // } )
        // .catch( console.warn );

//sin embargo la peticion anterior es muy compleja por lo que se puede simplificar, lo que se hara es encadenar las promesas, lo que se realiza especificamente es un return implicito de las respuestas (respuestas.json()):

peticion
    .then( respuestas => respuestas.json() ) //esto retorna una promesa por lo que puedo crear un then aparte para la data como se muestra en la siguiente linea:
    .then( ({ data }) => { //aqui desestructuramos la data para extraer unicamente la data del url
        //console.log( data.images.original.url );//si no se desestructura se deberia poner aqui "data.data", en este caso se pone images porque es lo que nos importa y apuntaremos a una en especifico en este caso la llamda "original" y seleccionamos su url

        //otra forma de extraer ese url es almacenando en una variable, podemos tambien hacerlo mediante desestructuracion
        const { url } = data.images.original;
        //console.log( url ) //mostrar el URL de la imagen 

        //ahora vamos a crear es imagen en el HTML por lo que primero crearemos la cosntante de la imagen:
        const img = document.createElement('img');
        //determinamos la direccion en donde se encuentra la imagen, en este caso es por medio de un URL
        img.src = url;

        //ya creada la imagen en la memoria ahora se procede a ponerla en HTML:
        document.body.append( img );

        //ahora cada vez que recarguemos la pagina saldran diferentes imagenes gracias al endpoint

    } )//de esta forma podemos encadenar promesas lo que hace es que el resultado de la primera promesa pasa al siguiente then, esto hace que el codigo se vea mas limpio y manejable.
    .catch( console.warn );
    
//MAS INFORMACION DE LAS FETCH API: https://developer.mozilla.org/es/docs/Web/API/Fetch_API