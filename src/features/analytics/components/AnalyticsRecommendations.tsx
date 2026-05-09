import { ShieldAlert, AlertTriangle, Info, CheckCircle2, ChevronRight } from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'
import { useRecommendations } from '../hooks/useAnalytics'
import type { Recommendation } from '../types/analytics.types'

const levelConfig: Record<Recommendation['level'], { color: string; Icon: React.ElementType }> = {
    danger: { color: 'var(--status-danger)', Icon: ShieldAlert },
    warning: { color: 'var(--status-warn)', Icon: AlertTriangle },
    info: { color: 'var(--status-info)', Icon: Info },
    ok: { color: 'var(--status-ok)', Icon: CheckCircle2 },
}

export const AnalyticsRecommendations = () => {
    const { data: recommendations, isLoading } = useRecommendations()

    return (
        <Card className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">
                    5
                </span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Recommendations & Insights
                </h2>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-1">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-12 rounded-lg bg-[var(--bg-surface)] animate-pulse" />
                    ))
                    : recommendations?.map(rec => {
                        const { color, Icon } = levelConfig[rec.level]
                        return (
                            <button
                                key={rec.id}
                                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--bg-surface)] transition-colors text-left group"
                            >
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: `${color}22` }}
                                >
                                    <Icon className="w-4 h-4" style={{ color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-semibold text-[var(--text-primary)] leading-tight">
                                        {rec.title}
                                    </p>
                                    <p className="text-[10px] text-[var(--text-muted)] mt-0.5 leading-tight truncate">
                                        {rec.description}
                                    </p>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] shrink-0" />
                            </button>
                        )
                    })}
            </div>

            <button className="text-[10px] text-[var(--accent-cyan)] hover:underline self-end mt-auto">
                View all insights →
            </button>
        </Card>
    )
}