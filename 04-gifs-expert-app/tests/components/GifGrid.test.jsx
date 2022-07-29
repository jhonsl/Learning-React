import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );

        expect( screen.getByText( 'Cargando...' ) ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();
    });

    test('debe de mostar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'saitama',
                url: 'https://one-punch.com/saitama.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://dragon-ball.com/goku.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category }/> );

        expect( screen.getAllByRole('img').length ).toBe( 2 );
    });
});