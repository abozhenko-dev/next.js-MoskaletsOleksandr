import { ReactElement } from "react";

import { GetServerSideProps } from "next";

import { SWRConfig } from "swr";

import { MainLayout } from "@layouts";

import { ToDos } from "@pages";

import { Meta } from "@components";

import { ToDoService } from "@services";

import { DefaultPageProps, NextPageWithLayout } from "@utils";

const Page: NextPageWithLayout<DefaultPageProps> = (props) => {
  const { fallback, meta } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Meta meta={meta} />
      <ToDos />
    </SWRConfig>
  );
};

Page.getLayout = (page: ReactElement) => (
  <MainLayout fallback={page?.props?.fallback}>{page}</MainLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await ToDoService.getAll();

  return {
    props: {
      meta: {
        title: `Todos | Next.js`
      },
      fallback: {
        "/todos": data
      }
    }
  };
};

export default Page;
