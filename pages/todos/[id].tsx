import { GetServerSideProps } from "next";
import {MainLayout} from "../../src/layouts";
import { ToDoService } from "../../src/services/todo.service";
import { NextPageWithLayout } from "../../src/utils";
import { ReactElement } from "react";
import ToDo from "../../src/pages/todo";
import { Meta } from "../../src/components/utils";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

type Props = {
  fallback: any
}

const Page: NextPageWithLayout<Props> = (props) => {
  const { fallback } = props;
  const router = useRouter();
  const { id } = router.query;

  return (
    <SWRConfig value={{fallback}}>
      <Meta meta={{ title: `Todo #${id}  | Next.js` }} />
      <ToDo/>
    </SWRConfig>
  )
};


Page.getLayout = (page: ReactElement) => (
  <MainLayout
    fallback={page?.props?.fallback}
  >
    {page}
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await ToDoService.getOneById(id as string);

  return {
    props: {
      fallback: {
        ['/todos/' + id]: data
      }
    }
  };
}

export default Page;