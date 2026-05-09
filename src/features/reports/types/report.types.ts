export type ReportType = 'Performance' | 'Condition' | 'Efficiency' | 'Maintenance' | 'Compliance' | 'Operations'
export type ReportStatus = 'completed' | 'scheduled' | 'in_progress'

export interface Report {
  id: string
  name: string
  dateGenerated: string
  type: ReportType
  status: ReportStatus
}

export interface MaintenanceSchedule {
  id: string
  title: string
  scheduledDate: string
  dueInDays: number
  icon: string
}

export interface MonthlyTrendPoint {
  month: string
  maintenanceCases: number
  incidents: number
}

export interface ReportStats {
  totalMaintenanceCases: number
  totalIncidents: number
  avgResolutionHours: number
}