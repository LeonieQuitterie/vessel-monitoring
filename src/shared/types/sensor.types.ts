import type { TimeSeriesPoint } from './common.types'

export interface SensorReading {
  temperature: number
  vibration: number
  humidity: number
  power: number
  timestamp: string
}

export interface SensorCard {
  id: string
  label: string
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
  message: string
  source: string
  category: 'system' | 'engine' | 'connectivity' | 'sensor'
}