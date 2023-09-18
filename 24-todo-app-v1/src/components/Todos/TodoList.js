import styles from './TodoList.module.css'
import Todo from './Todo'

function TodoList(props) {
  console.log(props.data.length)

  if (props.data.length === 0) {
    return <h2 className={styles.clrText}>Todo list is empty</h2>
  }

  return (
    <div className={styles.todoListContainer}>
      {props.data.map((todo, index) => {
        return (
          <Todo
            key={index}
            todos={todo}
            delTodo={props.delTodo}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default TodoList
