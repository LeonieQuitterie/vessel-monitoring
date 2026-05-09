import {
    Thermometer,
    Activity,
    Droplets,
    RefreshCw,
} from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'
import { Badge } from '@/shared/components/ui/Badge'
import { Sparkline } from '@/shared/components/ui/Sparkline'
import { useEngineHealth } from '../hooks/useEngineHealth'
import type { SensorCard } from '@/shared/types/sensor.types'
import { useUTCClock } from '@/shared/hooks/useUTCClock'

const iconMap: Record<string, React.ElementType> = {
    temperature: Thermometer,
    vibration: Activity,
    humidity: Droplets,
}

const colorMap: Record<string, string> = {
    temperature: 'var(--accent-cyan)',
    vibration: 'var(--status-warn)',
    humidity: 'var(--status-ok)',
}

const SensorCardItem = ({ card }: { card: SensorCard }) => {
    const Icon = iconMap[card.id] ?? Activity
    const color = colorMap[card.id] ?? 'var(--accent-cyan)'

    return (
        <Card className="flex flex-col gap-2 flex-1">
            {/* Header */}
            <div className="flex items-center gap-2">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${color}22` }}
                >
                    <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <span className="text-[11px] text-[var(--text-secondary)] font-medium">
                    {card.label}
                </span>
            </div>

            {/* Value */}
            <div className="flex items-end justify-between">
                <div>
                    <span className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                        {card.value}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] ml-1">{card.unit}</span>
                    <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                        Normal Range: {card.normalMin} – {card.normalMax} {card.unit}
                    </p>
                </div>

                {/* Sparkline */}
                <div className="w-20">
                    <Sparkline data={card.sparkline} color={color} height={36} />
                </div>
            </div>

            {/* Badge */}
            <Badge
                label={card.isWithinRange ? 'Within Range' : 'Out of Range'}
                variant={card.isWithinRange ? 'ok' : 'danger'}
            />
        </Card>
    )
}

const LastSyncCard = () => {
    const { timeString, dateString } = useUTCClock()

    return (
        <Card className="flex flex-col gap-2 flex-1">
            {/* Header */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--accent-cyan)22]">
                    <RefreshCw className="w-4 h-4 text-[var(--accent-cyan)]" />
                </div>
                <span className="text-[11px] text-[var(--text-secondary)] font-medium">Last Sync</span>
            </div>

            {/* Value */}
            <div>
                <span className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                    {timeString}
                </span>
                <span className="text-xs text-[var(--text-muted)] ml-1">UTC</span>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{dateString}</p>
            </div>

            <Badge label="Synced" variant="synced" />
        </Card>
    )
}

export const EngineHealthOverview = () => {
    const { data: cards, isLoading } = useEngineHealth()

    if (isLoading) {
        return (
            <div className="flex gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex-1 h-32 rounded-xl bg-[var(--bg-card)] animate-pulse" />
                ))}
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-3">
                Engine Health Overview
            </h2>
            <div className="flex gap-3">
                {cards?.map(card => <SensorCardItem key={card.id} card={card} />)}
                <LastSyncCard />
            </div>
        </div>
    )
}