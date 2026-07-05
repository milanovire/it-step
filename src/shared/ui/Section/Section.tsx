import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
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
    <motion.div
      className={`${styles.header} ${styles[align]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  )
}
