import { clsx } from 'clsx'
import type { Severity } from '@/shared/types/common.types'

interface Props {
    severity: Severity | 'info'
    label?: string
    size?: 'sm' | 'md'
}

const config = {
    critical: { label: 'CRITICAL', color: 'text-[var(--status-danger)] border-[var(--status-danger)] bg-[var(--status-danger)]' },
    warning: { label: 'WARNING', color: 'text-[var(--status-warn)]   border-[var(--status-warn)]   bg-[var(--status-warn)]' },
    info: { label: 'INFO', color: 'text-[var(--status-info)]   border-[var(--status-info)]   bg-[var(--status-info)]' },
}

export const AlertSeverityBadge = ({ severity, label, size = 'sm' }: Props) => {
    const cfg = config[severity] ?? config.info
    return (
        <span
            className={clsx(
                'inline-flex items-center font-bold tracking-widest border rounded px-2 py-0.5',
                `bg-opacity-10 ${cfg.color}`,
                size === 'sm' ? 'text-[9px]' : 'text-[11px]'
            )}
        >
            {label ?? cfg.label}
        </span>
    )
}