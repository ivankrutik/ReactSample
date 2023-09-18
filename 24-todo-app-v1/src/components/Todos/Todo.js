import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo(props) {
  return (
    <div
      className={styles.todo}
      onDoubleClick={() => {
        props.delTodo(props.index)
      }}
    >
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      <div className={styles.todoText}>{props.todos}</div>
    </div>
  )
}
export default Todo
