import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { useAlertSummary } from '../hooks/useAlerts'
import { useTranslation } from '@/shared/hooks/useTranslation'

const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null
    return (
        <div className="rounded-lg border border-[var(--bg-border)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-[11px]">
            <p style={{ color: payload[0].payload.color }}>{payload[0].name}: {payload[0].value}</p>
        </div>
    )
}

export const AlertSeverityChart = () => {
    const { data: summary, isLoading } = useAlertSummary()
    const { t } = useTranslation()

    if (isLoading) return <div className="h-48 rounded-xl bg-[var(--bg-card)] animate-pulse" />

    const chartData = [
        { name: t.alerts.critical,      value: summary?.critical ?? 0,      color: 'var(--status-danger)' },
        { name: t.alerts.warnings,      value: summary?.warnings ?? 0,      color: 'var(--status-warn)'   },
        { name: t.alerts.informational, value: summary?.informational ?? 0, color: 'var(--status-info)'   },
    ]

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4">
            <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-3">
                {t.alerts.severity}
            </p>

            <div className="flex items-center gap-4">
                {/* Donut */}
                <div className="relative w-32 h-32 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={38}
                                outerRadius={56}
                                paddingAngle={2}
                                dataKey="value"
                                isAnimationActive={false}
                            >
                                {chartData.map((entry, i) => (
                                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold font-mono text-[var(--text-primary)]">
                            {summary?.total ?? 0}
                        </span>
                        <span className="text-[9px] text-[var(--text-muted)]">
                            {t.alerts.title}
                        </span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-2 flex-1">
                    {chartData.map(({ name, value, color }) => (
                        <div key={name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                                <span className="text-[11px] text-[var(--text-secondary)]">{name}</span>
                            </div>
                            <span className="text-[11px] font-mono font-semibold" style={{ color }}>
                                {value} ({Math.round((value / (summary?.total ?? 1)) * 100)}%)
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}