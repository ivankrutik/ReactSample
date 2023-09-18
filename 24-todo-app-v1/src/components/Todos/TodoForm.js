import styles from './TodoForm.module.css'
import { useState } from 'react'

function TodoForm(props) {
  function handleFromSubmit(event) {
    event.preventDefault()
    props.addTodo(todo)
    setTodo('')
  }

  const [todo, setTodo] = useState('')

  function HandleInputChange(text) {
    setTodo(text)
    console.log(text)
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleFromSubmit}>
        <input
          placeholder="Enter new todo"
          value={todo}
          type="text"
          onChange={(e) => HandleInputChange(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
