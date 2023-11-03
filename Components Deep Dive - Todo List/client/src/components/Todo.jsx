export default function Todo({
    id,
    text,
    isCompleted,
    toggleTodosStatus
}){
    return(
        <tr className={`todo ${isCompleted ? 'is-completed' :''}`.trim()}>
                        <td>{text}</td>
                        <td>{isCompleted ? 'Complete' : 'Not complete'}</td>
                        <td className="todo-action">
                            <button className="btn todo-btn" onClick={() =>toggleTodosStatus(id)}>Change status</button>
                        </td>
                    </tr>
    )
}