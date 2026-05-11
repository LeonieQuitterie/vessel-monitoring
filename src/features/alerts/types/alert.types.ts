import type { Severity } from '@/shared/types/common.types'

export type AlertStatus = 'active' | 'acknowledged' | 'assigned' | 'in_progress' | 'resolved' | 'pending'
export type EscalationLevel = 1 | 2 | 3

export interface LocalizedString {
  en: string
  vi: string
}

export interface Alert {
  id: string
  severity: Severity
  title: LocalizedString
  subsystem: LocalizedString
  component: string           // tên kỹ thuật — không dịch
  timestamp: string
  timeAgo: string
  status: AlertStatus
  probableCause: LocalizedString
  recommendedActions: {
    en: string[]
    vi: string[]
  }
}

export interface AlertHistoryEntry {
  id: string
  time: string
  event: LocalizedString
  severity: Severity | 'info'
  triggeredBy: string
  escalationLevel: EscalationLevel
  assignedTo: string
  status: AlertStatus
}

export interface AlertSummary {
  total: number
  critical: number
  warnings: number
  informational: number
  resolved24h: number
}