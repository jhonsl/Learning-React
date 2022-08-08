export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li 
            className={`list-group-item d-flex justify-content-between ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
            onClick={() => onToggleTodo( todo.id )}
            style={{ cursor: 'pointer' }}
        >
            <span aria-label="span" className="align-self-center">
                { todo.description }
            </span>
            <button 
                className="btn btn-danger"
                onClick={() =>{onDeleteTodo(todo.id)}}
            >
                Delete
            </button>
        </li>
    )
}
