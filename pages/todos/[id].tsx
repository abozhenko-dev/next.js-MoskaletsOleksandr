import { ReactElement } from "react";

import { GetServerSideProps } from "next";

import { SWRConfig } from "swr";

import { MainLayout } from "@layouts";

import { ToDo } from "@pages";

import { Meta } from "@components";

import { ToDoService } from "@services";

import { DefaultPageProps, NextPageWithLayout } from "@utils";

const Page: NextPageWithLayout<DefaultPageProps> = (props) => {
  const { fallback, meta } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Meta meta={meta} />
      <ToDo />
    </SWRConfig>
  );
};

Page.getLayout = (page: ReactElement) => (
  <MainLayout fallback={page?.props?.fallback}>{page}</MainLayout>
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
        ["/todos/" + id]: data
      }
    }
  };
};

export default Page;
