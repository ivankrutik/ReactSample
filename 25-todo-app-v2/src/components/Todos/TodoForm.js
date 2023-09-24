import styles from './TodoForm.module.css'
import { useState } from 'react'
import Button from '../UI/Button'

function TodoForm(props) {
  function handleFromSubmit(event) {
    event.preventDefault()
    props.addTodo(todo)
    setTodo('')
  }

  const [todo, setTodo] = useState('')

  function HandleInputChange(text) {
    setTodo(text)
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
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
