import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('pruebas en el todoApp', () => {
    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Aprender React', done: false},
            {id: 2, description: 'Aprender Angular', done: false},
            {id: 3, description: 'Aprender Vue', done: false},
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleAddTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp />);
        screen.debug();
        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender Angular')).toBeTruthy();
        expect(screen.getByText('Aprender Vue')).toBeTruthy();
    });
});


