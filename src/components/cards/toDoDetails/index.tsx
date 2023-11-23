import { useRouter } from 'next/router';
import { useToDo } from '../../../hooks/useToDo';
import { ITodo } from '../../../utils'

const ToDoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const todo: ITodo = useToDo(id as string);

  return (
    <div className='todo-details' >
      <p>ID: {todo?.id}</p>
      <p>Done: {todo?.completed ? "Yes" : "No"}</p>
      <h2>{todo?.title}</h2>
    </div>
  );
};

export default ToDoDetail
