import { ReactNode } from 'react'
import Footer from '../../components/sections/footer'
import Header from '../../components/sections/header'
import styles from './Layout.module.scss'

type Props = {
  children?: ReactNode
}

export const MainLayout = ({ children }: Props) => (
  <div className="wrapper overflow">
    <Header />
    <main className={styles.container} >
      {children}
    </main>
    <Footer />
  </div>
)
