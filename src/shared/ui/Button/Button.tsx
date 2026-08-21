import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'cta' | 'ctaSubmit' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }

type ButtonAsLink = BaseProps &
  { to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

type ButtonAsExternal = BaseProps &
  { href: string; external?: boolean } & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth,
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`

  if ('to' in props && props.to) {
    const { to, ...rest } = props as ButtonAsLink
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsExternal
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
