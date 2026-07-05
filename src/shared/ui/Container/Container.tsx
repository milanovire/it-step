import type { ReactNode, CSSProperties } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  narrow?: boolean
}

export function Container({ children, className = '', style, narrow }: ContainerProps) {
  return (
    <div
      className={`${styles.container} ${narrow ? styles.narrow : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
