import { ITodo } from '@utils/index';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  data: ITodo
};

export const ToDoItem: FC<Props> = ({ data }) => {
  const { completed, id, title } = data;

  return (
    <div className='todo-item' >
      <Link href="/todos/[id]" as={`/todos/${id}`}>
        <p className='title' >{title}</p>
      </Link>
      <p>Done: {completed ? "Yes" : "No"}</p>
    </div>
  );
};