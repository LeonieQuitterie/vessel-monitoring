import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useTranslation } from '@/shared/hooks/useTranslation'

const trendData = [
    { time: '14:30', critical: 3, warning: 12, info: 8  },
    { time: '18:30', critical: 4, warning: 14, info: 9  },
    { time: '22:30', critical: 4, warning: 15, info: 10 },
    { time: '02:30', critical: 3, warning: 16, info: 11 },
    { time: '06:30', critical: 5, warning: 17, info: 10 },
    { time: '10:30', critical: 5, warning: 17, info: 10 },
    { time: '14:30', critical: 5, warning: 17, info: 10 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
        <div className="rounded-lg border border-[var(--bg-border)] bg-[var(--bg-surface)] p-2 text-[10px]">
            <p className="text-[var(--text-muted)] mb-1">{label}</p>
            {payload.map((p: any) => (
                <p key={p.dataKey} style={{ color: p.color }}>{p.name}: {p.value}</p>
            ))}
        </div>
    )
}

export const AlertTrendChart = () => {
    const { t } = useTranslation()

    const legendItems = [
        { label: t.alerts.critical,      color: 'var(--status-danger)' },
        { label: t.alerts.warnings,      color: 'var(--status-warn)'   },
        { label: t.alerts.informational, color: 'var(--status-info)'   },
    ]

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4">
            <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    {t.alerts.trend}
                </p>
                <div className="flex items-center gap-3">
                    {legendItems.map(({ label, color }) => (
                        <div key={label} className="flex items-center gap-1">
                            <span className="w-4 h-0.5 rounded" style={{ backgroundColor: color }} />
                            <span className="text-[9px] text-[var(--text-muted)]">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <ResponsiveContainer width="100%" height={140}>
                <LineChart data={trendData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-border)" vertical={false} />
                    <XAxis dataKey="time" tick={{ fontSize: 9, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 9, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="critical" stroke="var(--status-danger)" strokeWidth={1.5} dot={false} name={t.alerts.critical}      isAnimationActive={false} />
                    <Line type="monotone" dataKey="warning"  stroke="var(--status-warn)"   strokeWidth={1.5} dot={false} name={t.alerts.warnings}      isAnimationActive={false} />
                    <Line type="monotone" dataKey="info"     stroke="var(--status-info)"   strokeWidth={1.5} dot={false} name={t.alerts.informational} isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}