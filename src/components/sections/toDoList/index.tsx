import { useToDos } from '../../../hooks/useToDos';
import { ITodo } from '../../../utils'
import ToDoItem from '../../cards/toDoItem'

const ToDoList = () => {
  const todos: ITodo[] = useToDos();
  
  return (
    <ul className='todo-list' >
      {todos && todos.map((item) => (
        <li key={item.id}>
          <ToDoItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList
