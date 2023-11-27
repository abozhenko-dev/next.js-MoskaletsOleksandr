import { ReactElement } from "react";

import { MainLayout } from "@layouts";

import { Contacts } from "@pages";

import { Meta } from "@components";

import { NextPageWithLayout } from "@utils";

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
