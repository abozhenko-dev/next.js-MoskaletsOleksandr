import { IMetadata } from "@utils/index";
import Head from "next/head";
import { FC } from "react";

interface MetaProps {
  meta: IMetadata;
};

export const Meta: FC<MetaProps> = ({ meta }) => {
    return (
        <Head>
            <title>{meta?.title || "Next.js"}</title>
        </Head>
    );
};