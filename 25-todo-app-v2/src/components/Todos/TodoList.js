import styles from './TodoList.module.css'
import Todo from './Todo'

function TodoList({ delTodo, toogleTodo, data }) {
  if (data.length === 0) {
    return <h2 className={styles.clrText}>Todo list is empty</h2>
  }

  return (
    <div className={styles.todoListContainer}>
      {data.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            delTodo={delTodo}
            toogleTodo={toogleTodo}
          />
        )
      })}
    </div>
  )
}

export default TodoList
