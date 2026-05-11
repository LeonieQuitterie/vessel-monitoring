import {
    Cpu,
    Router,
    Cloud,
    BarChart2,
    Monitor,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'
import { useSystemEvents } from '../hooks/useEngineHealth'
import { useTranslation } from '@/shared/hooks/useTranslation'

const categoryColor: Record<string, string> = {
    system: 'var(--status-ok)',
    sensor: 'var(--accent-cyan)',
    connectivity: 'var(--status-warn)',
    engine: 'var(--status-danger)',
}

export const SystemFlowDiagram = () => {
    const { data: events, isLoading } = useSystemEvents()

    const { t, language } = useTranslation()

    const flowNodes = [
        { id: 'sensors', label: 'Sensors', sublabel: 'Data Collection', icon: Cpu },
        { id: 'gateway', label: 'Edge Gateway', sublabel: 'Data Processing', icon: Router },
        { id: 'cloud', label: 'Cloud', sublabel: 'Secure Transfer', icon: Cloud },
        { id: 'analytics', label: 'Analytics', sublabel: 'Insights Generated', icon: BarChart2 },
        { id: 'dashboard', label: 'Dashboard', sublabel: 'Monitoring Active', icon: Monitor },
    ]

    return (
        <Card className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                {t.dashboard.systemFlow}
            </h2>

            {/* Flow nodes */}
            <div className="flex items-center justify-between">
                {flowNodes.map((node, idx) => {
                    const Icon = node.icon
                    return (
                        <div key={node.id} className="flex items-center gap-2">
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface)] border border-[var(--bg-border)] flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-[var(--accent-cyan)]" />
                                </div>
                                <span className="text-[9px] font-semibold text-[var(--text-secondary)] text-center leading-tight">
                                    {node.label}
                                </span>
                                <span className="text-[8px] text-[var(--text-muted)] text-center leading-tight">
                                    {node.sublabel}
                                </span>
                            </div>
                            {idx < flowNodes.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-[var(--text-muted)] mb-4 shrink-0" />
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--bg-border)]" />

            {/* Recent Events */}
            <div className="flex flex-col gap-2">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-5 rounded bg-[var(--bg-surface)] animate-pulse" />
                    ))
                    : events?.map(event => (
                        <div key={event.id} className="flex items-center gap-3 text-[11px]">
                            <span className="font-mono text-[var(--text-muted)] shrink-0 w-12">
                                {event.timestamp}
                            </span>
                            <CheckCircle2
                                className="w-3 h-3 shrink-0"
                                style={{ color: categoryColor[event.category] ?? 'var(--status-ok)' }}
                            />
                            <span className="text-[var(--text-secondary)] flex-1 truncate">
                                {event.message[language]}
                            </span>
                            <span
                                className="text-[9px] px-1.5 py-0.5 rounded border shrink-0"
                                style={{
                                    color: categoryColor[event.category] ?? 'var(--text-muted)',
                                    borderColor: categoryColor[event.category] ?? 'var(--bg-border)',
                                }}
                            >
                                {event.source}
                            </span>
                        </div>
                    ))}
            </div>

            {/* View all */}
            <button className="text-[10px] text-[var(--accent-cyan)] hover:underline self-end mt-auto">
                {t.dashboard.viewAllEvents}
            </button>
        </Card>
    )
}