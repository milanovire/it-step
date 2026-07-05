import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '@/shared/config/routes'
import { DIARY_URL } from '@/shared/config/diary'
import { CONTACTS } from '@/shared/config/contacts'
import { Logo } from '@/shared/ui/Logo'
import styles from './MobileDrawer.module.scss'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.nav
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            <div className={styles.header}>
              <Logo />
              <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть меню">
                <X size={24} />
              </button>
            </div>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.label === 'Дневник' ? (
                    <a href={DIARY_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} onClick={onClose}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.contacts}>
              <a href={CONTACTS.admission.href} className={styles.contactLink}>
                <Phone size={16} />
                <span>{CONTACTS.admission.phone}</span>
              </a>
              <a href={CONTACTS.address.href} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <MapPin size={16} />
                <span>{CONTACTS.address.text}</span>
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
