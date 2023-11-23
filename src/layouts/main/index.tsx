import { ReactNode } from 'react'
import Footer from '../../components/sections/footer'
import Header from '../../components/sections/header'

type Props = {
  children?: ReactNode
}

export const MainLayout = ({ children }: Props) => (
  <div className="wrapper">
    <Header />
    <main style={{paddingInline: '20px'}} >
      {children}
    </main>
    <Footer />
  </div>
)
