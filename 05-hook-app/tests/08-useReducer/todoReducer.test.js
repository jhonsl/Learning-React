import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en el todoReducer', () => {
    const initialState = [
        {
            id: 1,
            description: 'Aprender React',
            done: false
        }
    ];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(initialState).toBe(newState);
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'Aprender vue',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test('debe de poner en true el done de un todo', () => {
        const action = {
            type: '[TODO] Toogle todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);0
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    });
});