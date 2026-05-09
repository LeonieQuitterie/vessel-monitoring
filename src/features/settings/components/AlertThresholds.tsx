import { useState } from 'react'
import { Thermometer, Activity, Droplets, Zap, RefreshCw, Check } from 'lucide-react'
import { useThresholdConfig } from '../hooks/useSettings'
import type { ThresholdConfig } from '../types/settings.types'

const thresholdFields = [
    { key: 'temperature', label: 'Temperature (°C)', sublabel: 'Normal: 50 – 80', icon: Thermometer, color: 'var(--chart-temp)', minKey: 'temperatureMin' as keyof ThresholdConfig, maxKey: 'temperatureMax' as keyof ThresholdConfig },
    { key: 'vibration', label: 'Vibration (g)', sublabel: 'Normal: 0 – 0.5', icon: Activity, color: 'var(--chart-vibration)', minKey: 'vibrationMin' as keyof ThresholdConfig, maxKey: 'vibrationMax' as keyof ThresholdConfig },
    { key: 'humidity', label: 'Humidity (%)', sublabel: 'Normal: 30 – 80', icon: Droplets, color: 'var(--chart-humidity)', minKey: 'humidityMin' as keyof ThresholdConfig, maxKey: 'humidityMax' as keyof ThresholdConfig },
]

export const AlertThresholds = () => {
    const { data: config } = useThresholdConfig()
    const [sensitivity, setSensitivity] = useState<'low' | 'medium' | 'high'>('medium')

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">2</span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Alert Thresholds
                </h2>
            </div>

            {/* Threshold rows */}
            <div className="flex flex-col gap-4">
                {thresholdFields.map(({ key, label, sublabel, icon: Icon, color, minKey, maxKey }) => (
                    <div key={key} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}22` }}>
                            <Icon className="w-3.5 h-3.5" style={{ color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-[var(--text-primary)]">{label}</p>
                            <p className="text-[9px] text-[var(--text-muted)]">{sublabel}</p>
                            {/* Slider visual */}
                            <div className="mt-1.5 h-1.5 rounded-full bg-[var(--bg-surface)] relative">
                                <div className="absolute h-full rounded-full" style={{ backgroundColor: color, left: '20%', right: '20%' }} />
                            </div>
                        </div>
                        {/* Min/Max inputs */}
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="flex flex-col items-center gap-0.5">
                                <span className="text-[8px] text-[var(--text-muted)]">Min</span>
                                <div className="w-12 bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded px-2 py-1 text-[10px] font-mono text-[var(--text-primary)] text-center">
                                    {config?.[minKey] ?? 0}
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-0.5">
                                <span className="text-[8px] text-[var(--text-muted)]">Max</span>
                                <div className="w-12 bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded px-2 py-1 text-[10px] font-mono text-[var(--text-primary)] text-center">
                                    {config?.[maxKey] ?? 0}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Risk Sensitivity */}
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[var(--status-warn)22]">
                        <Zap className="w-3.5 h-3.5 text-[var(--status-warn)]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[11px] font-semibold text-[var(--text-primary)]">Risk Sensitivity</p>
                        <div className="flex items-center gap-2 mt-1.5">
                            {(['low', 'medium', 'high'] as const).map(level => (
                                <button
                                    key={level}
                                    onClick={() => setSensitivity(level)}
                                    className={[
                                        'flex-1 py-1 rounded text-[10px] font-semibold capitalize transition-all',
                                        sensitivity === level
                                            ? 'bg-[var(--accent-cyan)] text-[var(--bg-base)]'
                                            : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-secondary)]',
                                    ].join(' ')}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[var(--bg-border)] text-[11px] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-all">
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset to Defaults
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-base)] text-[11px] font-bold hover:opacity-90 transition-opacity">
                    <Check className="w-3.5 h-3.5" />
                    Save Changes
                </button>
            </div>
        </div>
    )
}