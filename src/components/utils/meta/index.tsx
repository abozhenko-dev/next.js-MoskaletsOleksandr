import { FC } from "react";

import Head from "next/head";

import { IMetadata } from "@utils";

interface MetaProps {
  meta: IMetadata;
}

export const Meta: FC<MetaProps> = ({ meta }) => {
  return (
    <Head>
      <title>{meta?.title || "Next.js"}</title>
    </Head>
  );
};
