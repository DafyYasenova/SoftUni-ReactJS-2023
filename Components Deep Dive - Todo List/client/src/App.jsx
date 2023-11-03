import { useState } from 'react'

import './App.css'
import Loading from './components/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
 

 
  <main classNameName="main">

   
    <section classNameName="todo-list-container">
      <h1>Todo List</h1>

      <div classNameName="add-btn-container">
        <button classNameName="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">

       
       {/* <Loading /> */}

      
        <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>

          
            <tr className="todo is-completed">
              <td>Give dog a bath</td>
              <td>Complete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

          
            <tr className="todo is-completed">
              <td>Do laundry</td>
              <td>Complete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

           
            <tr className="todo">
              <td>Vacuum floor</td>
              <td>Incomplete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

            
            <tr className="todo is-completed">
              <td>Feed cat</td>
              <td>Complete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

           
            <tr className="todo">
              <td>Change light bulbs</td>
              <td>Incomplete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

            
            <tr className="todo is-completed">
              <td>Feed cat</td>
              <td>Complete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

           
            <tr className="todo">
              <td>Change light bulbs</td>
              <td>Incomplete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

          
            <tr className="todo is-completed">
              <td>Go to Store</td>
              <td>Completed</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

           
            <tr classNameName="todo">
              <td>Fill gas tank</td>
              <td>Incomplete</td>
              <td classNameName="todo-action">
                <button classNameName="btn todo-btn">Change status</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  
  <footer classNameName="footer">
    <p>Copyright © designed by Mihail Valkov</p>
  </footer>
    </>
  )
}

export default App
