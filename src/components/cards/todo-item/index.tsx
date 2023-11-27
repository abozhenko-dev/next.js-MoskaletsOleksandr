import { FC } from "react";

import Link from "next/link";

import { ITodo } from "@utils";

type Props = {
  data: ITodo;
};

export const ToDoItem: FC<Props> = ({ data }) => {
  const { completed, id, title } = data;

  return (
    <div className="todo-item">
      <Link href="/todos/[id]" as={`/todos/${id}`}>
        <p className="title">{title}</p>
      </Link>
      <p>Done: {completed ? "Yes" : "No"}</p>
    </div>
  );
};
