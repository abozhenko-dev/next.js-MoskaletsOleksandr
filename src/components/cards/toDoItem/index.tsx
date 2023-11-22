import Link from 'next/link'
import { ITodo } from '../../../utils'
import styles from './ToDoItem.module.scss'

type Props = {
  data: ITodo
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
