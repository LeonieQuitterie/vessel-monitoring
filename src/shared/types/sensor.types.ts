import type { TimeSeriesPoint } from './common.types'

export interface LocalizedString {
  en: string
  vi: string
}

export interface SensorReading {
  temperature: number
  vibration: number
  humidity: number
  power: number
  timestamp: string
}

export interface SensorCard {
  id: string
  label: LocalizedString
  value: number
  unit: string
  normalMin: number
  normalMax: number
  isWithinRange: boolean
  sparkline: TimeSeriesPoint[]
}

export interface SystemEvent {
  id: string
  timestamp: string
  message: LocalizedString
  source: string
  category: 'system' | 'engine' | 'connectivity' | 'sensor'
}