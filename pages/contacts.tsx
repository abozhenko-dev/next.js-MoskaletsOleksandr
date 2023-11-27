import { ReactElement } from "react";

import { MainLayout } from "@layouts/index";

import { Contacts } from "@pages";

import { Meta } from "@components/index";

import { NextPageWithLayout } from "@utils/index";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Meta meta={{ title: "Contacts | Next.js" }} />
      <Contacts />
    </>
  );
};

Page.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
