import { Title, ToDoItem } from "@components/index";
import { useToDos } from "@hooks/index";
import { ITodo } from "@utils/index";
import { FC } from "react";

export const ToDos: FC = () => {
  const todos: ITodo[] = useToDos();

  return (
    <section>
      <Title title='Todos List' />
      <ul className='todo-list' >
        {todos && todos.map((item) => (
          <li key={item.id}>
            <ToDoItem data={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};