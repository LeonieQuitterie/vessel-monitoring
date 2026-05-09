import { Zap, Thermometer, Activity, Shield } from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'
import { useRiskItems } from '../hooks/useAnalytics'
import type { RiskLevel } from '@/shared/types/common.types'

const iconMap: Record<string, React.ElementType> = {
    bearing: Activity,
    temp: Thermometer,
    vibration: Activity,
    power: Zap,
}

const levelConfig: Record<RiskLevel, { color: string; label: string }> = {
    high: { color: 'var(--status-danger)', label: 'High' },
    medium: { color: 'var(--status-warn)', label: 'Medium' },
    low: { color: 'var(--status-ok)', label: 'Low' },
}

export const PredictiveRiskPanel = () => {
    const { data: risks, isLoading } = useRiskItems()

    return (
        <Card className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">
                    2
                </span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Predictive Risk Assessment
                </h2>
            </div>

            {/* Risk items */}
            <div className="flex flex-col gap-4">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-10 rounded-lg bg-[var(--bg-surface)] animate-pulse" />
                    ))
                    : risks?.map(risk => {
                        const Icon = iconMap[risk.icon] ?? Shield
                        const { color, label } = levelConfig[risk.level]
                        const pct = risk.score

                        return (
                            <div key={risk.id} className="flex flex-col gap-1.5">
                                {/* Row: icon + name + level */}
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: `${color}22` }}
                                    >
                                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                                    </div>
                                    <span className="text-[11px] text-[var(--text-secondary)] flex-1">
                                        {risk.name}
                                    </span>
                                    <span
                                        className="text-[10px] font-bold"
                                        style={{ color }}
                                    >
                                        {label}
                                    </span>
                                </div>

                                {/* Progress bar */}
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1.5 rounded-full bg-[var(--bg-surface)]">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{ width: `${pct}%`, backgroundColor: color }}
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono text-[var(--text-muted)] w-10 text-right">
                                        {pct}/100
                                    </span>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </Card>
    )
}