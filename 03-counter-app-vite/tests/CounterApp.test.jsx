import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 100;
    test('debe de hacer match con el Snapshot', () => {
        const { container } = render( <CounterApp value={initialValue}/> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostar el valor inicial de 100', () => {
        render( <CounterApp value={initialValue}/> );
        expect( screen.getByTestId('title').innerHTML ).toContain( String(initialValue) );
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( String(initialValue) );
    });

    test('debe de incrementar el valor inicial con el boton +1', () => {
        render( <CounterApp value={initialValue}/> );
        fireEvent.click( screen.getByRole('button', { name: 'btn-add' }) );
        expect( screen.getByText(`El valor es: ${initialValue + 1}`) ).toBeTruthy();
    });

    test('debe de decrementar el valor inicial con el boton -1', () => {
        render( <CounterApp value={initialValue}/> );
        fireEvent.click( screen.getByRole('button', { name: 'btn-rest' }) );
        expect( screen.getByText(`El valor es: ${initialValue - 1}`) ).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {
        render( <CounterApp value={initialValue}/> );
        for(let i = 0; i < 3; i++) {
            fireEvent.click( screen.getByRole('button', { name: 'btn-add' }) );
        }
        expect( screen.getByText(`El valor es: ${initialValue + 3}`) ).toBeTruthy();
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText(`El valor es: ${initialValue}`) ).toBeTruthy();
    });
});