import Head from "next/head";
import { FC } from "react";
import { IMetadata } from "../../../utils";

interface MetaProps {
  meta: IMetadata;
}

export const Meta: FC<MetaProps> = ({meta}) => { 
    return (
        <Head>
            <title>{meta?.title || "Безсонне медіа"}</title>
            <meta name="description" content={meta?.description} />
        </Head>
    );
}