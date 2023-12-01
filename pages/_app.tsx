import React from "react";

import { AppProps } from "next/app";

import { SWRConfig } from "swr";

import { $api } from "@services";

import { BrowserProvider, NextPageWithLayout } from "@utils";

import "../src/scss/globals.scss";

interface Props extends AppProps {
  Component: NextPageWithLayout;
}

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
        }}
      >
        <BrowserProvider>
          {getLayout(<Component {...pageProps} />)}
        </BrowserProvider>
      </SWRConfig>
    </>
  );
};

export default App;
