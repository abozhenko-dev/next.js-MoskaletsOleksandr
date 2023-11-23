import React from "react";
import '../src/scss/globals.scss'
import { NextPageWithLayout } from "../src/utils";

import '../src/scss/globals.scss';

type Props = {
  Component: NextPageWithLayout;
  pageProps: any // поки не знаю який тут тип прописувати
}

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default App