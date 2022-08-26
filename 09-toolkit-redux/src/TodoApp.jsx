import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1);

    const { data: todos, isLoading } = useGetTodosQuery();
    const { data: todo, isLoading: isLoadingTodo } = useGetTodoByIdQuery(todoId);

    const handleNextTodo = () => setTodoId(todoId + 1);
    const handlePrevTodo = () => {
        if(todoId === 1) return;
        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <div style={{ display: 'flex' }}>
                <div>
                    <h4>All todos is loading: { isLoading ? 'True' : 'False' }</h4>

                    <pre>...</pre>

                    <ol>
                        {
                            todos?.map(todo => 
                                <li key={todo.id}>
                                    <strong>{ todo.completed ? 'Completed' : 'Pending'} - </strong>
                                    { todo.title }
                                </li>
                            )
                        }
                    </ol>
                </div>

                <div>
                    <h4>Todo is loading: { isLoadingTodo ? 'True' : 'False' }</h4>

                    <pre>...</pre>

                    <li>{ todo?.title }</li>

                    <button onClick={() => handlePrevTodo()}>
                        Prev todo
                    </button>

                    <button onClick={() => handleNextTodo()}>
                        Next todo
                    </button>
                </div>
            </div>
        </>
    )
}
