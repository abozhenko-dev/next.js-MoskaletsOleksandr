import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router"
import Layout from "../../components/Layout/Layout";
import ToDoDetail from "../../components/ToDoDetail/ToDoDetail";
import { Todo } from "../../interfaces";
import { getToDoById } from "../../services/todo.service";

type Props = {
  todo: Todo
}

const ToDoPage = ({todo}: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title={`Todo #${id}  | Next.js`}>
      <section>
        <Link href="/todos">
          Back to Todos
        </Link>
        <ToDoDetail todo={todo} />
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const todo: Todo = await getToDoById(id as string);
  return {
    props: {
      todo
    }
  }
}

export default ToDoPage;