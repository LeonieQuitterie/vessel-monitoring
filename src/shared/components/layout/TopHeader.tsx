import { useUTCClock } from '@/shared/hooks/useUTCClock'
import { useSystemStore } from '@/store/useSystemStore'
import { APP_CONFIG } from '@/shared/constants/appConfig'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const TopHeader = () => {
    const { t } = useTranslation() 

    const { timeString, dateString } = useUTCClock()
    const vessel = useSystemStore(s => s.vessel)

    return (
        <header className="relative h-16 flex items-center px-6 border-b border-[var(--bg-border)] bg-[var(--bg-surface)] overflow-hidden shrink-0">
            <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-r from-transparent to-[var(--accent-cyan)] opacity-5" />
            {/* Left: Title */}
            <div className="flex flex-col justify-center">
                <h1 className="text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase leading-none">
                    {t.system.name}
                </h1>
                <p className="text-[10px] text-[var(--text-muted)] tracking-wider mt-0.5">
                    {t.system.tagline}
                </p>
            </div>

            {/* Right: Vessel + Clock + Logo */}
            <div className="ml-auto flex items-center gap-6 relative z-10">
                {/* Vessel */}
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Vessel</span>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">{vessel.name}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">IMO: {vessel.imo}</span>
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-[var(--bg-border)]" />

                {/* UTC Clock */}
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">UTC</span>
                    <span className="text-sm font-bold text-[var(--accent-cyan)] font-mono tracking-wider">
                        {timeString}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">{dateString}</span>
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-[var(--bg-border)]" />

                {/* Logo */}
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-cyan)] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[var(--bg-base)]">
                            {APP_CONFIG.logoInitials}
                        </span>
                    </div>
                    <span className="text-[8px] text-[var(--text-muted)] mt-0.5 tracking-wider">
                        {APP_CONFIG.companyName}
                    </span>
                </div>
            </div>
        </header>
    )
}