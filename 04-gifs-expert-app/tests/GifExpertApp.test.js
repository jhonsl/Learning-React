import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExpertApp />', () => {

    const category = 'Pokemon';
    const category2 = 'naruto shippuden';

    test('should', () => {
        render( <GifExpertApp /> );
    });

    test('se crea con solo una categoria', () => {
        render( <GifExpertApp /> );

        const categories = screen.getAllByRole('heading', { level: 3 });
        expect( categories.length ).toBe( 1 );
    });

    test('se agrega una nueva categoria', () => {
        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: category }} );
        fireEvent.submit( form );

        expect( screen.getByText(category) ).toBeTruthy();
    });

    test('se agregan diferentes categorias', () => {
        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: category }} );
        fireEvent.submit( form );
        
        fireEvent.input( input, {target: { value: category2 }} );
        fireEvent.submit( form );

        const categories = screen.getAllByRole('heading', {level: 3});

        screen.debug()
        expect( categories.length ).toBe( 3 );
    });
});