import './App.css'
import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addInTodosHandler = (text) => {
    setTodos([...todos, text])
  }

  const delInTodosHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addInTodosHandler}></TodoForm>
      <TodoList data={todos} delTodo={delInTodosHandler}></TodoList>
    </div>
  )
}
export default App
