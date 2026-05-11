import { ShieldCheck, ChevronRight, AlertTriangle, Info } from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'
import { useTranslation } from '@/shared/hooks/useTranslation'

const levelConfig = {
    ok:      { color: 'var(--status-ok)',     Icon: ShieldCheck   },
    warning: { color: 'var(--status-warn)',   Icon: AlertTriangle },
    info:    { color: 'var(--status-info)',   Icon: Info          },
    danger:  { color: 'var(--status-danger)', Icon: AlertTriangle },
}

export const RecommendedActions = () => {
    const { t } = useTranslation()

    const actions = [
        {
            id: 1,
            level: 'ok' as const,
            title:       t.dashboard.recommendedActions[0].title,
            description: t.dashboard.recommendedActions[0].description,
        },
        {
            id: 2,
            level: 'warning' as const,
            title:       t.dashboard.recommendedActions[1].title,
            description: t.dashboard.recommendedActions[1].description,
        },
        {
            id: 3,
            level: 'info' as const,
            title:       t.dashboard.recommendedActions[2].title,
            description: t.dashboard.recommendedActions[2].description,
        },
    ]

    return (
        <Card className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-cyan)]" />
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    {t.dashboard.recommendations}
                </h2>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-1">
                {actions.map(action => {
                    const { color, Icon } = levelConfig[action.level]
                    return (
                        <button
                            key={action.id}
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
                                    {action.title}
                                </p>
                                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 leading-tight truncate">
                                    {action.description}
                                </p>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] shrink-0" />
                        </button>
                    )
                })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-1 border-t border-[var(--bg-border)]">
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-ok)]" />
                    <span className="text-[10px] text-[var(--text-muted)]">{t.dashboard.noCritical}</span>
                </div>
                <button className="text-[10px] text-[var(--accent-cyan)] hover:underline">
                    {t.dashboard.viewAllAlerts}
                </button>
            </div>
        </Card>
    )
}