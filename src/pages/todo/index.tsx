import Link from "next/link";
import ToDoDetail from "../../components/cards/toDoDetails";
import { ITodo } from "../../utils";

type Props = {
  todo: ITodo
};

const ToDo  = ({ todo }: Props) => (
  <section>
    <Link href="/todos">
      Back to Todos
    </Link>
    <ToDoDetail todo={todo} />
  </section>
);

export default ToDo;