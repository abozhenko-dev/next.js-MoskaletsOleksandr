import { ReactElement } from "react";

import { MainLayout } from "@layouts";

import { Home } from "@pages";

import { Meta } from "@components";

import { NextPageWithLayout } from "@utils";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Meta meta={{ title: "Home | Next.js" }} />
      <Home />
    </>
  );
};

Page.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
