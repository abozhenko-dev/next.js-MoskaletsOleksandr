import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useToDo, useTranslation } from "@hooks";

import { ITodo } from "@utils";

export const ToDo: FC = () => {
  const router = useRouter();
  const t = useTranslation();

  const { id } = router.query;
  const todo: ITodo = useToDo(id as string);

  return (
    <section>
      <Link href="/todos">{t.action.backToTodos}</Link>
      <div className="todo-details">
        <p>
          {t.common.id}: {todo?.id}
        </p>
        <p>
          {t.common.done}:{" "}
          {todo?.completed ? t.enums.doneStatus.yes : t.enums.doneStatus.no}
        </p>
        <h2>{todo?.title}</h2>
      </div>
    </section>
  );
};
