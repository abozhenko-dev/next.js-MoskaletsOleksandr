import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { SWRConfig } from "swr";
import { DefaultPageProps, NextPageWithLayout } from "@utils/index";
import { Meta } from "@components/index";
import { ToDo } from "@pages/index";
import { MainLayout } from "@layouts/index";
import { ToDoService } from "@services/index";

const Page: NextPageWithLayout<DefaultPageProps> = (props) => {
  const { fallback, meta } = props;

  return (
    <SWRConfig value={{fallback}} >
      <Meta meta={meta} />
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
      meta: {
        title: `Todo #${id}  | Next.js`
      },
      fallback: {
        ['/todos/' + id]: data
      }
    }
  };
}

export default Page;