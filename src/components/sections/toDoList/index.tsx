import { ITodo } from '../../../utils'
import ToDoItem from '../../cards/toDoItem'
import styles from './ToDoList.module.scss'

type Props = {
  items: ITodo[]
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
