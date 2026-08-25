import type { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'default' | 'white' | 'gradient'
}

export function Section({ children, className = '', id, background = 'default' }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[background]} ${className}`}>
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
