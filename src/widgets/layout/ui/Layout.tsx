import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { ScrollToTop } from '@/app/providers/ScrollToTop'
import { ScrollToTopButton } from '@/widgets/scroll-to-top'
import styles from './Layout.module.scss'

export function Layout() {
  return (
    <div className={styles.layout}>
      <ScrollRestoration />
      <ScrollToTop />
      <ScrollToTopButton />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
