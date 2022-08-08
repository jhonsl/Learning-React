import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleAddTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>Todo App: { todosCount } <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleAddTodo }/>
                </div>
            </div>
        </>
    )
}
