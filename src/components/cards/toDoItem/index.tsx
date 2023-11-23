import Link from 'next/link'
import { ITodo } from '../../../utils'

type Props = {
  data: ITodo
}

const ToDoItem = ({ data }: Props) => (
  <div className='todo-item' >
    <Link href="/todos/[id]" as={`/todos/${data.id}`}>
      <p className='title' >{data.title}</p>
    </Link>
    <p>Done: {data.completed ? "Yes" : "No"}</p>
  </div>
);

export default ToDoItem
