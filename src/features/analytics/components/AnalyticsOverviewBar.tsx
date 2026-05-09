import { Heart, Activity, Ship, Clock } from 'lucide-react'
import { useAnalyticsOverview } from '../hooks/useAnalytics'
import { useSystemStore } from '@/store/useSystemStore'
import { useUTCClock } from '@/shared/hooks/useUTCClock'

const ScoreCell = ({
    icon: Icon,
    label,
    value,
    max,
    sublabel,
    color,
    sparkColor,
}: {
    icon: React.ElementType
    label: string
    value: number
    max: number
    sublabel: string
    color: string
    sparkColor: string
}) => (
    <div className="flex items-center gap-3">
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${color}22`, border: `1.5px solid ${color}` }}
        >
            <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{label}</p>
            <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold font-mono text-[var(--text-primary)]">{value}</span>
                <span className="text-[10px] text-[var(--text-muted)]">/{max}</span>
            </div>
            <p className="text-[9px] mt-0.5" style={{ color: sparkColor }}>{sublabel}</p>
        </div>
    </div>
)

export const AnalyticsOverviewBar = () => {
    const { data: overview, isLoading } = useAnalyticsOverview()
    const vessel = useSystemStore(s => s.vessel)
    const { timeString, dateString } = useUTCClock()

    if (isLoading) return <div className="h-20 rounded-xl bg-[var(--bg-card)] animate-pulse" />

    return (
        <div className="flex items-center gap-5 px-5 py-3 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)]">
            {/* Title */}
            <div className="flex items-center gap-2 mr-2">
                <Activity className="w-5 h-5 text-[var(--accent-cyan)]" />
                <div>
                    <p className="text-xs font-bold text-[var(--text-primary)] tracking-wide">
                        Analytics Overview
                    </p>
                    <p className="text-[9px] text-[var(--text-muted)]">Predictive intelligence</p>
                </div>
            </div>

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            <ScoreCell
                icon={Heart}
                label="Health Score"
                value={overview?.healthScore ?? 0}
                max={100}
                sublabel={overview?.healthLabel ?? ''}
                color="var(--status-ok)"
                sparkColor="var(--status-ok)"
            />

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            <ScoreCell
                icon={Activity}
                label="Anomaly Score"
                value={overview?.anomalyScore ?? 0}
                max={100}
                sublabel={overview?.anomalyLabel ?? ''}
                color="var(--status-warn)"
                sparkColor="var(--status-warn)"
            />

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            {/* Vessel */}
            <div className="flex items-center gap-2">
                <Ship className="w-4 h-4 text-[var(--text-muted)]" />
                <div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        Monitored Vessel
                    </p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{vessel.name}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">IMO: {vessel.imo}</p>
                </div>
            </div>

            {/* UTC — push right */}
            <div className="ml-auto flex items-center gap-3">
                <div className="w-px h-10 bg-[var(--bg-border)]" />
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--text-muted)]" />
                    <div>
                        <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Timestamp</p>
                        <p className="text-sm font-bold font-mono text-[var(--accent-cyan)]">{timeString}</p>
                        <p className="text-[9px] text-[var(--text-muted)]">{dateString}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}