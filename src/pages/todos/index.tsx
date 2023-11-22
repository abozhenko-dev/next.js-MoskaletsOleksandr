import Title from "../../components/ui/title";
import ToDoList from "../../components/sections/toDoList";
import { ITodo } from "../../utils";

type Props = {
  items: ITodo[]
}

const ToDos = ({items}: Props) => (
  <section>
    <Title title='Todos List' />
    <ToDoList items={items} />
  </section>
);

export default ToDos;