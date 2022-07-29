import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial del Hook', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon ball'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => {
        const { result } = renderHook(() => useFetchGifs('naruto'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
            { timeout: 2000 }
        );
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    });
});