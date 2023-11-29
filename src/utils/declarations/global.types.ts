import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";

import { IMetadata } from "./metadata";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface DefaultPageProps {
  fallback?: Record<string, any>;
  meta?: IMetadata;
}

export interface SelectOption {
  label: string;
  value: string | number;
}
