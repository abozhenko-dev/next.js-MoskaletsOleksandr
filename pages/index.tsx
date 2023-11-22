import { ReactElement } from 'react';
import { Meta } from '../src/components/utils';
import { MainLayout } from '../src/layouts'
import Home from '../src/pages/home';
import { NextPageWithLayout } from '../src/utils'

const Page: NextPageWithLayout = () => (
  <>
    <Meta meta={{title: 'Home | Next.js'}} />
    <Home />
  </>
)

Page.getLayout = (page: ReactElement) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page
