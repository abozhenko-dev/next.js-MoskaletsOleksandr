import { FC } from "react";

import Link from "next/link";

import { useTranslation } from "@hooks";

import { ITodo } from "@utils";

type Props = {
  data: ITodo;
};

export const ToDoItem: FC<Props> = ({ data }) => {
  const { completed, id, title } = data;
  const t = useTranslation();

  return (
    <div className="todo-item">
      <Link href="/todos/[id]" as={`/todos/${id}`}>
        <p className="title">{title.slice(0, 60)}</p>
      </Link>
      <p>
        {t.common.done}:{" "}
        {completed ? t.enums.doneStatus.yes : t.enums.doneStatus.no}
      </p>
    </div>
  );
};
