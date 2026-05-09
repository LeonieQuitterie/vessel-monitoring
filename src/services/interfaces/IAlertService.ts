import type { Alert, AlertHistoryEntry, AlertSummary } from '@/features/alerts/types/alert.types'

export interface IAlertService {
  getAlerts(): Promise<Alert[]>
  getAlertById(id: string): Promise<Alert | undefined>
  getAlertSummary(): Promise<AlertSummary>
  getAlertHistory(): Promise<AlertHistoryEntry[]>
}