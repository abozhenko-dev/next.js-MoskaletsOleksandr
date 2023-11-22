import {MainLayout} from '../../src/layouts'
import { ITodo, NextPageWithLayout } from '../../src/utils'
import { ReactElement } from 'react'
import ToDos from '../../src/pages/todos';
import { GetServerSideProps } from 'next';
import { ToDoService } from '../../src/services/todo.service';
import { Meta } from '../../src/components/utils';

type Props = {
  items: ITodo[]
}

const Page: NextPageWithLayout<Props> = ({ items }) => (
  <>
    <Meta meta={{ title: 'ToDos | Next.js' }} />
    <ToDos items={items} />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }  = await ToDoService.getAll();

  return {
    props: {
      items: data.slice(0, 30)
    }
  }
};

export default Page;
