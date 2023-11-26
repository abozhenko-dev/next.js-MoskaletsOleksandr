import { useToDo } from "@hooks/index";
import { ITodo } from "@utils/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

export const ToDo: FC = () => {
  const router = useRouter();

  const { id } = router.query;
  const todo: ITodo = useToDo(id as string);

  return (
    <section>
      <Link href="/todos">
        Back to Todos
      </Link>
      <div className='todo-details' >
        <p>ID: {todo?.id}</p>
        <p>Done: {todo?.completed ? "Yes" : "No"}</p>
        <h2>{todo?.title}</h2>
      </div>
    </section>
  );
};