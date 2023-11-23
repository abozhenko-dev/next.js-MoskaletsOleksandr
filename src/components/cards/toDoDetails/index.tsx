import { ITodo } from '../../../utils'

type Props = {
  todo: ITodo
}

const ToDoDetail = ({ todo }: Props) => (
  <div className='todo-details' >
    <p>ID: {todo.id}</p>
    <p>Done: {todo.completed ? "Yes" : "No"}</p>
    <h2>{todo.title}</h2>
  </div>
)

export default ToDoDetail
