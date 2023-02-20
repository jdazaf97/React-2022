
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => { 

    test('debe retornar un string y un numero', () => { 

        const [ letters, numbers ] = retornaArreglo();
        
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //determinar el tipo de dato

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        //esperar cualquier tipo de dato especificado, en este caso es string
        expect( letters ).toEqual( expect.any(String) );

     })

 })

