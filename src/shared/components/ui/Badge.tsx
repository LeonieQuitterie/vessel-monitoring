import { clsx } from 'clsx'

type BadgeVariant = 'ok' | 'warning' | 'danger' | 'info' | 'muted' | 'synced'

interface BadgeProps {
    label: string
    variant?: BadgeVariant
    dot?: boolean
    className?: string
}

// Giới hạn màu 
const variantStyles: Record<BadgeVariant, string> = {
    ok: 'text-[var(--status-ok)]   border-[var(--status-ok)]',
    warning: 'text-[var(--status-warn)] border-[var(--status-warn)]',
    danger: 'text-[var(--status-danger)] border-[var(--status-danger)]',
    info: 'text-[var(--status-info)]  border-[var(--status-info)]',
    synced: 'text-[var(--accent-cyan)]  border-[var(--accent-cyan)]',
    muted: 'text-[var(--text-muted)]   border-[var(--bg-border)]',
}

export const Badge = ({ label, variant = 'muted', dot = true, className }: BadgeProps) => {
    return (
        <span
            // clsx gộp 3 nhóm class
            // Cố định
            // Class thay đổi theo biến
            // Class từ bên ngoài truyền thêm   
            
            className={clsx(
                'inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-medium tracking-wide',
                variantStyles[variant],
                className
            )}
        >
            {dot && (
                <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'currentColor' }}
                />
            )}
            {label}
        </span>
    )
}