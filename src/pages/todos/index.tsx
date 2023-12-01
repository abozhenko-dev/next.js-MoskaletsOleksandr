import { FC } from "react";

import { Title, ToDoItem } from "@components";

import { useToDos, useTranslation } from "@hooks";

import { ITodo } from "@utils";

export const ToDos: FC = () => {
  const todos: ITodo[] = useToDos();
  const t = useTranslation();

  return (
    <section>
      <Title title={t.title.todosList} />
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
