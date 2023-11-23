import {MainLayout} from '../../src/layouts'
import { NextPageWithLayout } from '../../src/utils'
import { ReactElement } from 'react'
import ToDos from '../../src/pages/todos';
import { GetServerSideProps } from 'next';
import { ToDoService } from '../../src/services/todo.service';
import { Meta } from '../../src/components/utils';
import { SWRConfig } from 'swr';

type Props = {
  fallback: any
}

const Page: NextPageWithLayout<Props> = (props) => {
  const { fallback } = props;
  
  return (
    <SWRConfig value={{fallback}}>
      <Meta meta={{ title: 'ToDos | Next.js' }} />
      <ToDos/>
    </SWRConfig>
  );
};

Page.getLayout = (page: ReactElement) => (
  <MainLayout
    fallback={page?.props?.fallback}
  >
    {page}
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await ToDoService.getAll();

  return {
    props: {
      fallback: {
        '/todos': data.slice(0, 3)
      }
    }
  };
};

export default Page;
