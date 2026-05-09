import { useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'
import { Calendar } from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'
import type { TimeRange } from '@/shared/types/common.types'

const timeRanges: TimeRange[] = ['1H', '6H', '12H', '24H', '7D']

// Generate mock trend data inline
const generateTrend = (points: number) =>
    Array.from({ length: points }, (_, i) => ({
        time: `${String(Math.floor((i / points) * 24)).padStart(2, '0')}:${String(Math.floor((i % (points / 24)) * (1440 / points))).padStart(2, '0')}`,
        temperature: 70 + Math.sin(i * 0.4) * 10 + Math.random() * 5,
        vibration: 0.15 + Math.sin(i * 0.3) * 0.05 + Math.random() * 0.02,
        humidity: 60 + Math.sin(i * 0.2) * 8 + Math.random() * 3,
    }))

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
        <div className="rounded-lg border border-[var(--bg-border)] bg-[var(--bg-surface)] p-2.5 text-[11px] shadow-xl">
            <p className="text-[var(--text-muted)] mb-1">{label}</p>
            {payload.map((p: any) => (
                <p key={p.dataKey} style={{ color: p.color }} className="font-mono">
                    {p.name}: {typeof p.value === 'number' ? p.value.toFixed(2) : p.value}
                </p>
            ))}
        </div>
    )
}

export const TrendAnalysisChart = () => {
    const [activeRange, setActiveRange] = useState<TimeRange>('1H')
    const data = generateTrend(40)

    return (
        <Card className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Trend Analysis
                </h2>

                <div className="flex items-center gap-1">
                    {timeRanges.map(r => (
                        <button
                            key={r}
                            onClick={() => setActiveRange(r)}
                            className={[
                                'px-2.5 py-1 rounded text-[10px] font-semibold transition-all',
                                activeRange === r
                                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-base)]'
                                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]',
                            ].join(' ')}
                        >
                            {r}
                        </button>
                    ))}
                    <Calendar className="w-4 h-4 text-[var(--text-muted)] ml-1" />
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4">
                {[
                    { key: 'temperature', label: 'Temperature (°C)', color: 'var(--chart-temp)' },
                    { key: 'vibration', label: 'Vibration (g)', color: 'var(--chart-vibration)' },
                    { key: 'humidity', label: 'Humidity (%)', color: 'var(--chart-humidity)' },
                ].map(({ key, label, color }) => (
                    <div key={key} className="flex items-center gap-1.5">
                        <span className="w-6 h-0.5 rounded" style={{ backgroundColor: color }} />
                        <span className="text-[10px] text-[var(--text-muted)]">{label}</span>
                    </div>
                ))}
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={180}>
                <LineChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--bg-border)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="time"
                        tick={{ fontSize: 9, fill: 'var(--text-muted)' }}
                        tickLine={false}
                        axisLine={false}
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        tick={{ fontSize: 9, fill: 'var(--text-muted)' }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="temperature" stroke="var(--chart-temp)" strokeWidth={1.5} dot={false} name="Temp" isAnimationActive={false} />
                    <Line type="monotone" dataKey="vibration" stroke="var(--chart-vibration)" strokeWidth={1.5} dot={false} name="Vibration" isAnimationActive={false} />
                    <Line type="monotone" dataKey="humidity" stroke="var(--chart-humidity)" strokeWidth={1.5} dot={false} name="Humidity" isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}