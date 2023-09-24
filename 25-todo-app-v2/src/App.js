import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosAction from './components/Todos/TodosAction'

function App() {
  const [todos, setTodos] = useState([])

  const addInTodosHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const delInTodosHandler = (id) => {
    setTodos(todos.filter((val) => val.id !== id))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  const toogleTodoHandler = (id) => {
    console.log(id)
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addInTodosHandler}></TodoForm>
      {todos.length !== 0 && (
        <TodosAction
          isExistCompleted={completedTodosCount > 0}
          deleteCompleted={deleteCompletedTodosHandler}
          resetTodos={resetTodosHandler}
        ></TodosAction>
      )}
      <TodoList
        toogleTodo={toogleTodoHandler}
        data={todos}
        delTodo={delInTodosHandler}
      ></TodoList>

      {completedTodosCount > 0 && (
        <h3>
          You have completed {completedTodosCount}{' '}
          {completedTodosCount > 1 ? 'todos' : 'todo'}!
        </h3>
      )}
    </div>
  )
}
export default App
