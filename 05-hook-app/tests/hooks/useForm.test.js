import { renderHook, act } from '@testing-library/react'
import { useForm } from '../../src/hooks';

describe('pruebas en el useForm', () => {
    const initialForm = {
        name: 'jhon salazar',
        correo: 'jhon@google.com'
    };

    test('debe de retornar la informacion por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            correo: initialForm.correo,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newName = 'federico';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;

        act(() => onInputChange({ target: {name: 'name', value: newName} }));

        const {name, formState} = result.current;

        expect(name).toBe(newName);
        expect(formState.name).toBe(newName);
    });

    test('debe de hacer el reset del formulario', () => {
        const newName = 'federico';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({ target: {name: 'name', value: newName} });
            onResetForm();
        });

        const {name, formState} = result.current;

        expect(name).toBe(initialForm.name);
        expect(formState.name).toBe(initialForm.name);
    });
});