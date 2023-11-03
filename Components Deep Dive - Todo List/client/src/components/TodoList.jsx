export default function TodoList({ todos, toggleTodosStatus,}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {todos.map(todo => (
                    <tr className={`todo ${todo.isCompleted ? 'is-completed' :''}`.trim()}>
                        <td>{todo.text}</td>
                        <td>{todo.isCompleted ? 'Complete' : 'Not complete'}</td>
                        <td className="todo-action">
                            <button className="btn todo-btn" onClick={() =>toggleTodosStatus(todo.id)}>Change status</button>
                        </td>
                    </tr>
                ))}


            </tbody>
        </table>
    )
}