import { Todo } from '../../interfaces'
import ToDoItem from '../ToDoItem/ToDoItem'
import styles from './ToDoList.module.scss'

type Props = {
  items: Todo[]
}

const ToDoList = ({ items }: Props) => (
  <ul className={styles.list} >
    {items.map((item) => (
        <li key={item.id}>
            <ToDoItem data={item} />
      </li>
    ))}
  </ul>
)

export default ToDoList
