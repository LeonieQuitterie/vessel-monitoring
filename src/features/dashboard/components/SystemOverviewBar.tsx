import { Activity } from 'lucide-react'
import { useSystemStore } from '@/store/useSystemStore'
import { useUTCClock } from '@/shared/hooks/useUTCClock'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const SystemOverviewBar = () => {
    const vessel = useSystemStore(s => s.vessel)
    const { timeString } = useUTCClock()

    const { t } = useTranslation()

    return (
        <div className="flex items-center gap-6 px-4 py-2.5 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)]">
            {/* Icon + Title */}
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[var(--accent-cyan)] bg-opacity-20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[var(--accent-cyan)]" />
                </div>
                <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">
                    {t.dashboard.title}
                </span>
            </div>

            <div className="w-px h-5 bg-[var(--bg-border)]" />

            {/* Status */}
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    {t.dashboard.systemStatus}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-[var(--status-ok)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-ok)] animate-pulse" />
                    {t.system.active}
                </span>
            </div>

            <div className="w-px h-5 bg-[var(--bg-border)]" />

            {/* Vessel */}
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{t.system.vessel}</span>
                <span className="text-xs font-semibold text-[var(--text-primary)]">{vessel.name}</span>
            </div>

            <div className="w-px h-5 bg-[var(--bg-border)]" />

            {/* IMO */}
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{t.system.imo}</span>
                <span className="text-xs font-mono text-[var(--text-primary)]">{vessel.imo}</span>
            </div>

            {/* UTC — push to right */}
            <div className="ml-auto flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{t.system.utc}</span>
                <span className="text-xs font-mono font-bold text-[var(--accent-cyan)]">{timeString}</span>
            </div>
        </div>
    )
}