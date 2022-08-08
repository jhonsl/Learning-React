import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en el MultipleCustomHook', () => {
    const increment = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: increment
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'nextQuote' });

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [
                { author: 'Federico', quote: 'Hola mundo' }
            ],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> ); 
        const nextButton = screen.getByRole('button', { name: 'nextQuote' });
        
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Federico')).toBeTruthy();
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe llamar la funcion incrementar', () => {
        useFetch.mockReturnValue({
            data: [
                { author: 'Federico', quote: 'Hola mundo' }
            ],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> ); 

        const nextButton = screen.getByRole('button', { name: 'nextQuote' });

        fireEvent.click(nextButton);

        expect(increment).toHaveBeenCalled();
    });
});