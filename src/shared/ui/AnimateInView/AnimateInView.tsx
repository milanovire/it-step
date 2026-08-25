import type { ReactNode } from 'react'
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
}: AnimateInViewProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  )
}
