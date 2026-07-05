import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Logo } from '@/shared/ui/Logo'
import { Container } from '@/shared/ui/Container'
import { MobileDrawer } from '@/features/mobile-drawer'
import { NAV_ITEMS } from '@/shared/config/routes'
import { DIARY_URL } from '@/shared/config/diary'
import { useMediaQuery } from '@/shared/lib/hooks'
import styles from './Header.module.scss'

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const y = window.scrollY
        if (!prev && y > 48) return true
        if (prev && y < 8) return false
        return prev
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isHome ? styles.home : ''}`}
    >
      <Container>
        <motion.div
          className={styles.shell}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.mainRow}>
            <Logo />

            {!isMobile ? (
              <nav className={styles.navPill}>
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    !item.external &&
                    (location.pathname === item.path ||
                      location.pathname.startsWith(`${item.path}/`))

                  if (item.label === 'Дневник') {
                    return (
                      <a
                        key={item.label}
                        href={DIARY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navLink}
                      >
                        {item.label}
                      </a>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    >
                      {isActive && (
                        <motion.span
                          className={styles.activeBg}
                          layoutId="navActive"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className={styles.navText}>{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
            ) : (
              <button
                className={styles.menuBtn}
                onClick={() => setDrawerOpen(true)}
                aria-label="Открыть меню"
              >
                <Menu size={22} strokeWidth={2} />
              </button>
            )}
          </div>
        </motion.div>
      </Container>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
