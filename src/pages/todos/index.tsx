import { FC } from "react";

import { Title, ToDoItem } from "@components";

import { useToDos } from "@hooks";

import { ITodo } from "@utils";

export const ToDos: FC = () => {
  const todos: ITodo[] = useToDos();

  return (
    <section>
      <Title title="Todos List" />
      <ul className="todo-list">
        {todos &&
          todos.map((item) => (
            <li key={item.id}>
              <ToDoItem data={item} />
            </li>
          ))}
      </ul>
    </section>
  );
};
