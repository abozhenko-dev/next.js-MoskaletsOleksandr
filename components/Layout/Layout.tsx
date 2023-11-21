import { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className={styles.container} >
      {children && <div>{children}</div>}
    </main>
    <Footer />
  </>
)

export default Layout;
