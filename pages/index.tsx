import { Meta } from '@components/index';
import { MainLayout } from '@layouts/index';
import { Home } from '@pages/index';
import { NextPageWithLayout } from '@utils/index';
import { ReactElement } from 'react';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Meta meta={{ title: 'Home | Next.js' }} />
      <Home />
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
