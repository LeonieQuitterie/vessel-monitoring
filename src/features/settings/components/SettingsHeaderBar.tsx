import { Settings, Cpu, Activity, Ship, RefreshCw } from 'lucide-react'
import { useSystemStore } from '@/store/useSystemStore'
import { useUTCClock } from '@/shared/hooks/useUTCClock'

export const SettingsHeaderBar = () => {
    const vessel = useSystemStore(s => s.vessel)
    const { timeString, dateString } = useUTCClock()

    return (
        <div className="flex items-center gap-5 px-5 py-3 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)]">
            {/* Title */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)] bg-opacity-20 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <div>
                    <p className="text-xs font-bold text-[var(--text-primary)] tracking-wide">System Settings</p>
                    <p className="text-[9px] text-[var(--text-muted)]">Configuration & preferences</p>
                </div>
            </div>

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            {/* Connected Devices */}
            <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[var(--text-muted)]" />
                <div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Connected Devices</p>
                    <p className="text-xl font-bold font-mono text-[var(--text-primary)] leading-none">
                        12 <span className="text-xs font-normal text-[var(--status-ok)]">Online</span>
                    </p>
                </div>
            </div>

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            {/* Active Sensors */}
            <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[var(--text-muted)]" />
                <div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Active Sensors</p>
                    <p className="text-xl font-bold font-mono text-[var(--text-primary)] leading-none">
                        28<span className="text-sm text-[var(--text-muted)]">/32</span>{' '}
                        <span className="text-xs font-normal text-[var(--status-ok)]">Active</span>
                    </p>
                </div>
            </div>

            <div className="w-px h-10 bg-[var(--bg-border)]" />

            {/* Vessel */}
            <div className="flex items-center gap-2">
                <Ship className="w-4 h-4 text-[var(--text-muted)]" />
                <div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Vessel Profile</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{vessel.name}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">IMO: {vessel.imo}</p>
                </div>
            </div>

            {/* Last Sync — push right */}
            <div className="ml-auto flex items-center gap-3">
                <div className="w-px h-10 bg-[var(--bg-border)]" />
                <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[var(--text-muted)]" />
                    <div>
                        <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Last Sync</p>
                        <p className="text-sm font-bold font-mono text-[var(--accent-cyan)]">{timeString} UTC</p>
                        <p className="text-[9px] text-[var(--text-muted)]">{dateString}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}