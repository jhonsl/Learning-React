import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe('Pruebas en el useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook(useCounter); 
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual( expect.any(Function) );
        expect(increment).toEqual( expect.any(Function) );
        expect(reset).toEqual( expect.any(Function) );
    });

    test('debe de generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const {result} = renderHook(useCounter);
        const {increment} = result.current;
        
        act(() => increment());
        
        const {counter} = result.current;

        expect(counter).toBe(11)       
    });

    test('debe de decrementar el contador', () => {
        const {result} = renderHook(useCounter);
        const {decrement} = result.current;

        act(() => decrement());

        const {counter} = result.current;

        expect(counter).toBe(9);
    });

    test('debe de resetear el contador', () => {
        const {result} = renderHook(useCounter);
        const {decrement, reset} = result.current;

        act(() => {
            decrement();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(10);
    });
});