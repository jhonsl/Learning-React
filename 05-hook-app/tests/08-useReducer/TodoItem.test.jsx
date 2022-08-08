import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('pruebas en TodoItem', () => {
    const todo = {
        id: 1,
        description: 'Aprender Angular',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    test('debe de mostrar el Todo pendiente de completar', () => {
        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />  
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).not.toContain('text-decoration-line-through');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center');
    });

    test('debe de mostrar el Todo completado', () => {
        todo.done = true;

        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />  
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toContain('text-decoration-line-through');
    });

    test('el span debe de llamar el toggleTodo cuando se hace click', () => {
        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />  
        );

        const liElement = screen.getByRole('listitem');
        fireEvent.click(liElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('el button debe de llamar el deleteTodo', () => {
        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />  
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});