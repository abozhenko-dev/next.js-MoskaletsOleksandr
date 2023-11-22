import { ReactElement } from 'react';
import {MainLayout} from '../src/layouts'
import { NextPageWithLayout } from '../src/utils';
import Contacts from '../src/pages/contacts';
import { Meta } from '../src/components/utils';

const Page: NextPageWithLayout = () => (
  <>
    <Meta meta={{ title: 'Contacts | Next.js' }} />
    <Contacts />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page
