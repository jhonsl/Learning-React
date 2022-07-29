import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('probando GifItem.jsx', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Probando el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url }/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostar la imagen con el URÑ y el ALT indicado', () => {
        render(<GifItem title={ title } url={ url }/>);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe de mostar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});