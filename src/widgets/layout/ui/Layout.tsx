import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { TopBar } from '@/widgets/top-bar'
import { Footer } from '@/widgets/footer'
import { ScrollToTop } from '@/app/providers/ScrollToTop'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { ScrollToTopButton } from '@/widgets/scroll-to-top'
import styles from './Layout.module.scss'

export function Layout() {
  return (
    <div className={styles.layout}>
      <ScrollRestoration />
      <ScrollToTop />
      <ScrollToTopButton />
      <div className={styles.siteHeader}>
        <TopBar />
        <Header />
      </div>
      <main className={styles.main}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
