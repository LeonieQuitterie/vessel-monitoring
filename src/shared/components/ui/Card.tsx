import { type ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 transition-colors duration-200',
        onClick && 'cursor-pointer hover:bg-[var(--bg-card-hover)]',
        className
      )}
    >
      {children}
    </div>
  )
}