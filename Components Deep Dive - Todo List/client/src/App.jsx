import { useState } from 'react'

import './App.css'
import Loading from './components/Loading'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
 <Header />

 
  <main classNameName="main">

   
    <section classNameName="todo-list-container">
      <h1>Todo List</h1>

      <div classNameName="add-btn-container">
        <button classNameName="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">

       
       {/* <Loading /> */}

      
        <TodoList />
      </div>
    </section>
  </main>

  <Footer />
 
    </>
  )
}

export default App
