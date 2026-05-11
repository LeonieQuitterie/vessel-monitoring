import type { RiskLevel, TimeSeriesPoint } from '@/shared/types/common.types'

export interface LocalizedString {
  en: string
  vi: string
}

export interface AnalyticsOverview {
  healthScore: number
  healthLabel: LocalizedString
  anomalyScore: number
  anomalyLabel: LocalizedString
}

export interface TrendDataPoint {
  timestamp: string
  temperature: number
  vibration: number
  humidity: number
  power: number
}

export interface RiskItem {
  id: string
  name: LocalizedString
  score: number
  level: RiskLevel
  icon: string
}

export interface AnomalyEvent {
  id: string
  timestamp: string
  parameter: LocalizedString
  value: number
  unit: string
  deviation: LocalizedString
  component: string             // tên kỹ thuật — không dịch
  severity: 'high' | 'medium' | 'low'
}

export interface BehaviorMetric {
  label: LocalizedString
  unit: string
  current: number
  normalMin: number
  normalMax: number
}

export interface Recommendation {
  id: string
  level: 'danger' | 'warning' | 'info' | 'ok'
  title: LocalizedString
  description: LocalizedString
}

export type { TimeSeriesPoint }