import React from "react";
import '../src/scss/globals.scss';
import { SWRConfig } from "swr";
import { AppProps } from "next/app";
import { NextPageWithLayout } from "@utils/index";
import { $api } from "@services/index";

interface Props extends AppProps {
  Component: NextPageWithLayout;
};

const App = (props: Props) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);  

  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url) => $api.get(url).then((res) => res.data),
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false
        }}>
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </>
  );
};

export default App;