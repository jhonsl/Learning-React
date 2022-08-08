import { useEffect, useReducer } from "react";
import { todoReducer } from './todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleAddTodo = (todo) => {
        dispatch({
            type: '[TODO] Add todo',
            payload: todo
        });
    };
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        });
    };
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toogle todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
