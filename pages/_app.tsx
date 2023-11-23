import React from "react";
import '../src/scss/globals.scss'
import { NextPageWithLayout } from "../src/utils";
import '../src/scss/globals.scss';
import { SWRConfig } from "swr";
import { $api } from "../src/services";

type Props = {
  Component: NextPageWithLayout;
  pageProps: any; // поки не знаю який тут тип прописувати
}

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  console.log(pageProps);
  

  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url) => $api.get(url).then((res) => res.data),
          // revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false
        }}>
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </>
  );
};

export default App