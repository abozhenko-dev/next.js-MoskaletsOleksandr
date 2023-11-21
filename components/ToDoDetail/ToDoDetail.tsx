import { Todo } from '../../interfaces'
import styles from './ToDoDetail.module.scss'

type Props = {
  todo: Todo
}

const ToDoDetail = ({ todo }: Props) => (
  <div className={styles.container} >
    <p>ID: {todo.id}</p>
    <p>Done: {todo.completed ? "Yes" : "No"}</p>
    <h2 className={styles.title} >{todo.title}</h2>
  </div>
)

export default ToDoDetail
