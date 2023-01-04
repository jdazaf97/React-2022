
//ASYNC - AWAIT

    //ASYNC, la palabra clave async ayuda a transformar una funcion a que retorne su "return" por defecto en una promesa:
        
        //cosnt getImagen = async() => {
        //     return('http://asddvadgwfwefwef.com')
        // }

        //getImagen.then( console.log ) //Esto da el console.log de la funcion pero como si fuese una promesa, esto ayuda a simplificar.

    //AWAIT, ayuda a que podamos trabajar todo el codigo como si fuera sincrono, para coprenderlo trabajaremos el ejercicio anterior el cual la finalidad es tener el mismo resultado (imagenes gif al azar cada vez que se recargue la pagina), sin embargo con el async y el await se hara mucho mas simple

    const getImagen = async() => { //es importante utilizar el async, sin esto se dara un error con el await

        const apikey = 'nBcxkk9YLYurYpgXmJKVvOWRMhcDSIDB';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`); //sin el await, la respuesta es una promesa de tipo responsive, lo que realiza el wait es que se debe esperar a que la promesa (fecth) termine antes de ejecutar la siguiente linea de codigo. una vez termina se considera el codigo como sincrono
        const {data} = await respuesta.json();//en este caso este .json() regresa una promesa por lo que se debe esperar que se resuleva la promesa para resolver la data, por lo que aplicamos el await. NOTA: desestructuramos data para simplificar al llamarlo en la constante URL.
        const { url } = data.images.original; //determinamos que es lo que queremos extraer
        const img = document.createElement('img');//creamos el elemento de la imagen
        img.src = url;//especificamos la direccion de la imagen
        document.body.append( img );//editamos el codigo HTML para que salga la imagen en pantalla.

    }

    getImagen();
