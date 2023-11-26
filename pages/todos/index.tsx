import { ReactElement } from 'react'
import { GetServerSideProps } from 'next';
import { SWRConfig } from 'swr';
import { DefaultPageProps, NextPageWithLayout } from '@utils/index';
import { Meta } from '@components/index';
import { ToDos } from '@pages/index';
import { MainLayout } from '@layouts/index';
import { ToDoService } from '@services/index';

const Page: NextPageWithLayout<DefaultPageProps> = (props) => {
  const { fallback, meta } = props;
  
  return (
    <SWRConfig value={{fallback}}>
      <Meta meta={meta} />
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
      meta: {
        title: `Todos | Next.js`
      },
      fallback: {
        '/todos': data
      }
    }
  };
};

export default Page;
