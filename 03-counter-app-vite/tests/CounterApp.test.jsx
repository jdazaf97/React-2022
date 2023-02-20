import { fireEvent, render,screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en CounterApp',()=>{

    const value=10;
    
    test('Debe hacer match con el snapshot', () => { 
        
        const { container } = render( <CounterApp value={value}/> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe mostrar el valor inicial de 100 "<CounterApp value={100} />"', () => { 

        render( <CounterApp value={ 100 }/> );
        expect( screen.getByText(100) ).toBeTruthy() ;
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100');
        // screen.debug();

    });

    test('Debe de incrementar con el boton +1', () => { 

        render( <CounterApp value={ value }/> );
        fireEvent.click( screen.getByText('+1') )
        // screen.debug();
        expect( screen.getByText('11') ).toBeTruthy();

    });
    
    test('Debe de decrementar con el boton -1', () => { 

        render( <CounterApp value={ value }/> );
        fireEvent.click( screen.getByText('-1') )
        // screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    });
    
    test('Debe de resetear con el boton Reset', () => { 

        render( <CounterApp value={ value }/> );
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        
        //primer metodo:
        
        // fireEvent.click( screen.getByText('Reset') )
        // screen.debug();
        // expect( screen.getByText(value) ).toBeTruthy();

        //segundo metodo
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );
        // screen.debug();
        expect( screen.getByText( value ) ).toBeTruthy();

    });




})
