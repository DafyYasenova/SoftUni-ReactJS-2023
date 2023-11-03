import { useEffect, useState } from 'react'

import './App.css'
import Loading from './components/Loading'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        const result = Object.keys(data).map(id => ({ id, ...data[id] }))
        setTodos(result);
        setIsLoading(false);
      })
  }, []);

  const toggleTodosStatus = (id) => {
    setTodos(state => state.map(todo => todo.id == id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo))
  }

  const onAddTodo = () => {
    const lastId = Number(todos[todos.length - 1].id);
    const text = prompt('Task name:');
    const newTask = { id: lastId + 1, text, isCompleted: false };
    setTodos(state => [newTask, ...state]);
  }

  return (
    <>

      <Header />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onAddTodo}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {isLoading
              ? <Loading />
              : <TodoList todos={todos} toggleTodosStatus={toggleTodosStatus} />
            }


          </div>
        </section>
      </main>

      <Footer />

    </>
  )
}

export default App
