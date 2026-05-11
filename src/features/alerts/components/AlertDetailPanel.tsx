import { CheckCircle2, UserPlus, FileText, ShieldCheck, AlertTriangle } from 'lucide-react'
import { AlertSeverityBadge } from './AlertSeverityBadge'
import { useAlerts } from '../hooks/useAlerts'
import { useTranslation } from '@/shared/hooks/useTranslation'

interface Props {
    alertId: string | null
}

export const AlertDetailPanel = ({ alertId }: Props) => {
    const { data: alerts } = useAlerts()
    const { t, language } = useTranslation()
    const alert = alerts?.find(a => a.id === alertId)

    if (!alertId) {
        return (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center p-8">
                <ShieldCheck className="w-10 h-10 text-[var(--text-muted)]" />
                <p className="text-sm text-[var(--text-muted)]">{t.alerts.selectAlert}</p>
            </div>
        )
    }

    if (!alert) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="w-8 h-8 border-2 border-[var(--accent-cyan)] border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                    <AlertTriangle
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{
                            color: alert.severity === 'critical'
                                ? 'var(--status-danger)'
                                : alert.severity === 'warning'
                                    ? 'var(--status-warn)'
                                    : 'var(--status-info)',
                        }}
                    />
                    <h3 className="text-sm font-bold text-[var(--text-primary)] leading-tight">
                        {alert.title[language]}
                    </h3>
                </div>
                <AlertSeverityBadge severity={alert.severity} size="md" />
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                    { label: t.alerts.affectedSystem, value: alert.subsystem[language] },
                    { label: t.alerts.timestamp, value: `${new Date(alert.timestamp).toLocaleDateString('en', { month: 'short', day: '2-digit', year: 'numeric' })} UTC (${alert.timeAgo})` },
                    { label: t.alerts.severity2, value: alert.severity.toUpperCase() },
                    { label: t.alerts.assignedTo, value: alert.component },
                ].map(({ label, value }) => (
                    <div key={label}>
                        <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{label}</p>
                        <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">{value}</p>
                    </div>
                ))}
            </div>

            <div className="h-px bg-[var(--bg-border)]" />

            {/* Probable Cause */}
            <div>
                <p className="text-[11px] font-semibold text-[var(--text-primary)] mb-1.5">
                    {t.alerts.probableCause}
                </p>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    {alert.probableCause[language]}
                </p>
            </div>

            {/* Recommended Actions */}
            <div>
                <p className="text-[11px] font-semibold text-[var(--text-primary)] mb-1.5">
                    {t.alerts.recommendedActions}
                </p>
                <ul className="flex flex-col gap-1">
                    {alert.recommendedActions[language].map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-cyan)] mt-0.5 shrink-0">•</span>
                            {action}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--bg-border)]">
                {[
                    { label: t.alerts.acknowledge, icon: CheckCircle2, style: 'border border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]' },
                    { label: t.alerts.assignTech, icon: UserPlus, style: 'border border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--status-info)] hover:text-[var(--status-info)]' },
                    { label: t.alerts.createReport, icon: FileText, style: 'border border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--status-warn)] hover:text-[var(--status-warn)]' },
                    { label: t.alerts.resolve, icon: CheckCircle2, style: 'border border-[var(--status-ok)] text-[var(--status-ok)] hover:bg-[var(--status-ok)] hover:text-[var(--bg-base)]' },
                ].map(({ label, icon: Icon, style }) => (
                    <button
                        key={label}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${style}`}
                    >
                        <Icon className="w-3.5 h-3.5" />
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}