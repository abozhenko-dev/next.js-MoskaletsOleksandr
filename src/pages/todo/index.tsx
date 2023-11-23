import Link from "next/link";
import ToDoDetail from "../../components/cards/toDoDetails";

const ToDo  = () => (
  <section>
    <Link href="/todos">
      Back to Todos
    </Link>
    <ToDoDetail/>
  </section>
);

export default ToDo;