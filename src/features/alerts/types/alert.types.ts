import type { Severity } from '@/shared/types/common.types'

export type AlertStatus = 'active' | 'acknowledged' | 'assigned' | 'in_progress' | 'resolved' | 'pending'
export type EscalationLevel = 1 | 2 | 3

export interface Alert {
  id: string
  severity: Severity
  title: string
  subsystem: string
  component: string
  timestamp: string
  timeAgo: string
  status: AlertStatus
  probableCause: string
  recommendedActions: string[]
}

export interface AlertHistoryEntry {
  id: string
  time: string
  event: string
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