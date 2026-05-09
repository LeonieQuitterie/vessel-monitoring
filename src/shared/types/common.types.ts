export type Status = 'active' | 'inactive' | 'maintenance'
export type Severity = 'critical' | 'warning' | 'info'
export type RiskLevel = 'high' | 'medium' | 'low'
export type TimeRange = '1H' | '6H' | '12H' | '24H' | '7D'

export interface TimeSeriesPoint {
  timestamp: string
  value: number
}