import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail, Send } from 'lucide-react'
import { Logo } from '@/shared/ui/Logo'
import { Container } from '@/shared/ui/Container'
import { CONTACTS, SOCIAL_LINKS } from '@/shared/config/contacts'
import { ROUTES, NAV_ITEMS } from '@/shared/config/routes'
import styles from './Footer.module.scss'

const socialIcons: Record<string, React.ReactNode> = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  vk: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.08 14.27h-1.46c-.55 0-.72-.44-1.71-1.44-.86-.84-1.24-.95-1.46-.95-.3 0-.38.09-.38.5v1.32c0 .36-.12.58-1.08.58-1.6 0-3.37-.97-4.62-2.77-1.88-2.6-2.4-4.56-2.4-4.69 0-.21.09-.4.5-.4h1.46c.37 0 .51.17.65.57.71 2.05 1.9 3.85 2.39 3.85.18 0 .27-.09.27-.57V9.82c-.06-.98-.57-1.06-.57-1.42 0-.17.14-.34.37-.34h2.3c.31 0 .42.17.42.53v2.87c0 .31.14.42.23.42.18 0 .33-.11.65-.44 1.01-1.13 1.73-2.87 1.73-2.87.1-.21.27-.4.65-.4h1.46c.44 0 .53.23.44.53-.18.84-1.93 3.26-1.93 3.26-.17.27-.23.4 0 .69.17.23.74.72 1.12 1.16.68.77 1.2 1.42 1.34 1.87.14.44-.09.67-.53.67z" />
    </svg>
  ),
  telegram: <Send size={20} />,
  youtube: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.59 12 19.59 12 19.59s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.46z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="light" />
            <p className={styles.description}>
              IT ШАГ — лидер в сфере профессионального компьютерного
              образования в Беларуси с 1999 года.
            </p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={styles.socialLink}
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Навигация</h4>
            <ul className={styles.links}>
              {NAV_ITEMS.filter((item) => item.label !== 'Дневник').map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to={ROUTES.itEducation}>Все курсы</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Контакты</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={16} />
                <a href={CONTACTS.admission.href}>{CONTACTS.admission.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{CONTACTS.address.text}</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Режим работы</h4>
            <ul className={styles.schedule}>
              <li>Пн–Пт: 9:00 – 20:00</li>
              <li>Сб: 10:00 – 16:00</li>
              <li>Вс: выходной</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; 1999–{currentYear} Учебный центр IT ШАГ. Все права защищены.
          </p>
          <p className={styles.legal}>
            Зарегистрированный товарный знак. Лицензия Министерства образования РБ.
          </p>
        </div>
      </Container>
    </footer>
  )
}
