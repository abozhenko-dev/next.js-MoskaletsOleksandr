import { GetServerSideProps } from 'next'

import { Todo } from '../../interfaces'
import Title from '../../components/Title/Title'
import { getAllToDos } from '../../services/todo.service'
import ToDoList from '../../components/ToDoList/ToDoList'
import Layout from '../../components/Layout/Layout'

type Props = {
  items: Todo[]
}

const ToDos = ({ items }: Props) => (
  <Layout title="Todos | Next.js">
    <section>
      <Title title='Todos List' />
      <ToDoList items={items} />
    </section>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const items: Todo[] = await getAllToDos();
  return {
    props: {
      items: items.slice(0, 30)
    }
  }
}

export default ToDos;
