export type ReportType = 'Performance' | 'Condition' | 'Efficiency' | 'Maintenance' | 'Compliance' | 'Operations'
export type ReportStatus = 'completed' | 'scheduled' | 'in_progress'

export interface LocalizedString {
  en: string
  vi: string
}

export interface Report {
  id: string
  name: LocalizedString
  dateGenerated: string
  type: ReportType
  status: ReportStatus
}

export interface MaintenanceSchedule {
  id: string
  title: LocalizedString
  scheduledDate: string
  dueInDays: number
  icon: string
}

export interface MonthlyTrendPoint {
  month: string       // tháng — giữ nguyên (Dec '23...)
  maintenanceCases: number
  incidents: number
}

export interface ReportStats {
  totalMaintenanceCases: number
  totalIncidents: number
  avgResolutionHours: number
}