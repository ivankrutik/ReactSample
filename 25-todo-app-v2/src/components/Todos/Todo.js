import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, toogleTodo, delTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => delTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toogleTodo(todo.id)}
      ></FaCheck>
    </div>
  )
}
export default Todo
