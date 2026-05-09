import type {
    AnalyticsOverview,
    TrendDataPoint,
    RiskItem,
    AnomalyEvent,
    BehaviorMetric,
    Recommendation,
} from '@/features/analytics/types/analytics.types'

export const mockAnalyticsOverview: AnalyticsOverview = {
    healthScore: 92,
    healthLabel: 'Excellent',
    anomalyScore: 28,
    anomalyLabel: 'Moderate',
}

export const mockTrendData: TrendDataPoint[] = Array.from({ length: 48 }, (_, i) => ({
    timestamp: new Date(Date.now() - (48 - i) * 30 * 60000).toISOString(),
    temperature: 80 + Math.sin(i * 0.3) * 8 + Math.random() * 4,
    vibration: 0.15 + Math.sin(i * 0.2) * 0.05 + Math.random() * 0.02,
    humidity: 62 + Math.sin(i * 0.15) * 5 + Math.random() * 3,
    power: 18 + Math.sin(i * 0.25) * 6 + Math.random() * 3,
}))

export const mockRiskItems: RiskItem[] = [
    { id: 'R1', name: 'Bearing Wear Risk', score: 78, level: 'high', icon: 'bearing' },
    { id: 'R2', name: 'Overheating Risk', score: 54, level: 'medium', icon: 'temp' },
    { id: 'R3', name: 'Vibration Anomaly Risk', score: 46, level: 'medium', icon: 'vibration' },
    { id: 'R4', name: 'Power Deviation Risk', score: 22, level: 'low', icon: 'power' },
]

export const mockAnomalyEvents: AnomalyEvent[] = [
    {
        id: 'AN-001',
        timestamp: '14:34',
        parameter: 'Vibration',
        value: 1.62,
        unit: 'g',
        deviation: '+65% from baseline',
        component: 'Main Engine - Bearing #2',
        severity: 'high',
    },
    {
        id: 'AN-002',
        timestamp: '13:15',
        parameter: 'Temperature',
        value: 88.4,
        unit: '°C',
        deviation: '+12% from baseline',
        component: 'Exhaust System',
        severity: 'medium',
    },
]

export const mockBehaviorMetrics: BehaviorMetric[] = [
    { label: 'Temperature', unit: '°C', current: 71.6, normalMin: 50, normalMax: 90 },
    { label: 'Vibration', unit: 'g', current: 0.18, normalMin: 0, normalMax: 0.5 },
    { label: 'Humidity', unit: '%', current: 62, normalMin: 30, normalMax: 80 },
]

export const mockRecommendations: Recommendation[] = [
    { id: 'REC-001', level: 'danger', title: 'Inspect bearing assembly', description: 'Elevated vibration levels detected on Bearing #2.' },
    { id: 'REC-002', level: 'warning', title: 'Temperature trend rising above baseline', description: 'Monitor cooling system and check for obstructions.' },
    { id: 'REC-003', level: 'info', title: 'Increase monitoring frequency', description: 'Anomaly score is moderate. Increase sampling rate.' },
    { id: 'REC-004', level: 'ok', title: 'System performing within normal range', description: 'Power usage and humidity levels are optimal.' },
]