import Link from 'next/link'
import { Todo } from '../../interfaces'
import styles from './ToDoItem.module.scss'

type Props = {
  data: Todo
}

const ToDoItem = ({ data }: Props) => (
  <Link href="/todos/[id]" as={`/todos/${data.id}`}>
    <div className={styles.container} >
      <p className={styles.title} >{data.title}</p>
      <p>Done: {data.completed ? "Yes" : "No"}</p>
    </div>
  </Link> 
)

export default ToDoItem
