import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Pruebas en 06-deses-obj.test', () => { 

    test('usContext debe retornar un objeto', () => { 

        const claveUsuario = 'Felipe';
        const edadUsuario = 25;

        const usuario = usContext( claveUsuario, edadUsuario );

        console.log(usuario)

        expect( usuario ).toEqual( {
            nombreClave: claveUsuario,
            anios: edadUsuario,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
                }
            });

     })

 })
