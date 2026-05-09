import type { Report, MaintenanceSchedule, MonthlyTrendPoint, ReportStats } from '@/features/reports/types/report.types'

export interface IReportService {
  getReports(): Promise<Report[]>
  getMaintenanceSchedules(): Promise<MaintenanceSchedule[]>
  getMonthlyTrend(): Promise<MonthlyTrendPoint[]>
  getReportStats(): Promise<ReportStats>
}