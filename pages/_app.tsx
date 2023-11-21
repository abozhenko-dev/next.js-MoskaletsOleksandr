import React from "react";
import '../styles/global.scss'

type Props = {
  Component: React.ComponentType
  pageProps: any // поки не знаю який тут тип прописувати
}

const App = ({ Component, pageProps }: Props) => (
    <Component {...pageProps} />
)

export default App