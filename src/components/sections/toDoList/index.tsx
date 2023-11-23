import { ITodo } from '../../../utils'
import ToDoItem from '../../cards/toDoItem'

type Props = {
  items: ITodo[]
}

const ToDoList = ({ items }: Props) => (
  <ul className='todo-list' >
    {items.map((item) => (
        <li key={item.id}>
            <ToDoItem data={item} />
      </li>
    ))}
  </ul>
)

export default ToDoList
