import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosAction.module.css'

function TodosAction({ deleteCompleted, resetTodos, isExistCompleted }) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete compoeted todos"
        disabled={!isExistCompleted}
        onClick={deleteCompleted}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosAction
