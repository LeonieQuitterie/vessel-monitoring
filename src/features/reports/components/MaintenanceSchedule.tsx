import { Wrench, Fuel, Activity, Shield, ChevronRight } from 'lucide-react'
import { useMaintenanceSchedules } from '../hooks/useReports'

const iconMap: Record<string, React.ElementType> = {
    engine: Wrench,
    fuel: Fuel,
    ultrasonic: Activity,
    safety: Shield,
}

const dueColor = (days: number) => {
    if (days <= 10) return 'var(--status-danger)'
    if (days <= 20) return 'var(--status-warn)'
    return 'var(--status-ok)'
}

export const MaintenanceSchedule = () => {
    const { data: schedules, isLoading } = useMaintenanceSchedules()

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Scheduled Maintenance & Inspection Logs
                </p>
                <button className="text-[10px] text-[var(--accent-cyan)] hover:underline">View All</button>
            </div>

            <div className="flex flex-col gap-2">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-12 rounded-lg bg-[var(--bg-surface)] animate-pulse" />
                    ))
                    : schedules?.map(item => {
                        const Icon = iconMap[item.icon] ?? Wrench
                        const color = dueColor(item.dueInDays)
                        return (
                            <button
                                key={item.id}
                                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--bg-surface)] transition-colors text-left group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] flex items-center justify-center shrink-0">
                                    <Icon className="w-4 h-4 text-[var(--accent-cyan)]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-semibold text-[var(--text-primary)] truncate">
                                        {item.title}
                                    </p>
                                    <p className="text-[10px] text-[var(--text-muted)]">
                                        Scheduled: {item.scheduledDate}
                                    </p>
                                </div>
                                <span
                                    className="text-[9px] font-bold px-2 py-1 rounded border shrink-0"
                                    style={{ color, borderColor: color, backgroundColor: `${color}15` }}
                                >
                                    Due in {item.dueInDays} days
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                            </button>
                        )
                    })}
            </div>

            <button className="text-[10px] text-[var(--accent-cyan)] hover:underline self-start">
                View all maintenance schedules →
            </button>
        </div>
    )
}