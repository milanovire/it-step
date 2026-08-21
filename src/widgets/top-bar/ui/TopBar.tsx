import { Phone, MapPin } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { CONTACTS } from '@/shared/config/contacts'
import styles from './TopBar.module.scss'

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <Container>
        <div className={styles.inner}>
          <a
            href={CONTACTS.address.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <MapPin size={14} aria-hidden />
            <span className={styles.address}>{CONTACTS.address.text}</span>
          </a>
          <a href={CONTACTS.admission.href} className={styles.item}>
            <Phone size={14} aria-hidden />
            <span>{CONTACTS.admission.phone}</span>
          </a>
        </div>
      </Container>
    </div>
  )
}
