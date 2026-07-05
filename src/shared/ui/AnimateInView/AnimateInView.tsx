import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './AnimateInView.module.scss'

interface AnimateInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function AnimateInView({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimateInViewProps) {
  const directionOffset = {
    up: { y: 32, x: 0 },
    left: { y: 0, x: -32 },
    right: { y: 0, x: 32 },
    none: { y: 0, x: 0 },
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      className={`${styles.wrapper} ${className}`}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
