import { Bell, ShieldAlert, AlertTriangle, Info, CheckCircle2, Ship } from 'lucide-react'
import { useAlertSummary } from '../hooks/useAlerts'
import { useSystemStore } from '@/store/useSystemStore'
import { useUTCClock } from '@/shared/hooks/useUTCClock'
import { useTranslation } from '@/shared/hooks/useTranslation'

interface StatCellProps {
    icon: React.ElementType
    label: string
    value: number
    delta: string
    color: string
}

const StatCell = ({ icon: Icon, label, value, delta, color }: StatCellProps) => (
    <div className="flex items-center gap-3">
        <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${color}22` }}
        >
            <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{label}</p>
            <p className="text-xl font-bold font-mono text-[var(--text-primary)] leading-none">{value}</p>
            <p className="text-[9px] text-[var(--status-ok)] mt-0.5">{delta}</p>
        </div>
    </div>
)

export const AlertCenterBar = () => {
    const { data: summary, isLoading } = useAlertSummary()
    const vessel = useSystemStore(s => s.vessel)
    const { timeString, dateString } = useUTCClock()
    const { t } = useTranslation()

    if (isLoading) return <div className="h-20 rounded-xl bg-[var(--bg-card)] animate-pulse" />

    return (
        <div className="flex items-center gap-4 px-5 py-3 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)]">
            {/* Title */}
            <div className="flex items-center gap-2 mr-2">
                <Bell className="w-5 h-5 text-[var(--accent-cyan)]" />
                <div>
                    <p className="text-xs font-bold text-[var(--text-primary)] tracking-wide">{t.alerts.title}</p>
                    <p className="text-[9px] text-[var(--text-muted)]">{t.alerts.activeAlerts}</p>
                </div>
            </div>

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            <StatCell icon={ShieldAlert}   label={t.alerts.title}         value={summary?.total ?? 0}         delta="+8 vs last 24h" color="var(--accent-cyan)"   />
            <div className="w-px h-10 bg-[var(--bg-border)]" />
            <StatCell icon={ShieldAlert}   label={t.alerts.critical}      value={summary?.critical ?? 0}      delta="+2 vs last 24h" color="var(--status-danger)" />
            <div className="w-px h-10 bg-[var(--bg-border)]" />
            <StatCell icon={AlertTriangle} label={t.alerts.warnings}      value={summary?.warnings ?? 0}      delta="+3 vs last 24h" color="var(--status-warn)"   />
            <div className="w-px h-10 bg-[var(--bg-border)]" />
            <StatCell icon={Info}          label={t.alerts.informational}  value={summary?.informational ?? 0} delta="+3 vs last 24h" color="var(--status-info)"   />
            <div className="w-px h-10 bg-[var(--bg-border)]" />
            <StatCell icon={CheckCircle2}  label={t.alerts.resolved}      value={summary?.resolved24h ?? 0}   delta="+5 vs last 24h" color="var(--status-ok)"     />

            {/* Vessel + UTC — push right */}
            <div className="ml-auto flex items-center gap-4">
                <div className="w-px h-10 bg-[var(--bg-border)]" />
                <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-[var(--text-muted)]" />
                    <div>
                        <p className="text-[10px] text-[var(--text-muted)]">{t.system.vessel}</p>
                        <p className="text-xs font-semibold text-[var(--text-primary)]">{vessel.name}</p>
                    </div>
                </div>
                <div className="w-px h-10 bg-[var(--bg-border)]" />
                <div>
                    <p className="text-[10px] text-[var(--text-muted)]">{t.system.utc}</p>
                    <p className="text-sm font-bold font-mono text-[var(--accent-cyan)]">{timeString}</p>
                    <p className="text-[9px] text-[var(--text-muted)]">{dateString}</p>
                </div>
            </div>
        </div>
    )
}