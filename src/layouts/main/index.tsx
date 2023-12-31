import { FC, ReactNode } from "react";

import { SWRConfig } from "swr";

import { Footer, Header } from "@components";

type Props = {
  children?: ReactNode;
  fallback?: any;
};

export const MainLayout: FC<Props> = (props) => {
  const { fallback = {}, children } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <div className="wrapper">
        <Header />
        <main style={{ paddingInline: "2rem" }}>{children}</main>
        <Footer />
      </div>
    </SWRConfig>
  );
};
